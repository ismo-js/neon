import {
    O,
    Int, //TODO Find better integer typing!!!
} from "neon-lowbar"

// template entity:
export type Ent = Int | Dollar
export type EntSeq = [
    Int, // index
    Ent[] // content
]

// reduction:
export interface Reduc {
    // start index:
    startI :Int,
    pending :Ent[],
    matchSeqs :EntSeq[],
    args :Ent[][],
}

// dollar entity:
export class Dollar {
    constructor(readonly val :any) {}
}

export default abstract class Op {
    static readonly matchers :Ent[][]

    reduc(
        {
            startI,
            pending: pendingParam,
            matchSeqs,
            args,
        } :Reduc,
        r :Ent,
        i :Int,
    ) :Reduc {
        const pending = [...pendingParam, r]
        const wordI =
            pending.lastIndexOf(Chars.space as Int) + 1 as Int
        //…edge case: `-1 === lastIndex <=> 0 === wordI`!
        const pendWord = pending.slice(wordI)
        // pending fuselage:
        const pendFusel = pending.slice(0, wordI)

        if (this.constructor.matchers.some(e=> arrEq(pendWord, e)))
            return {
                startI: i,
                pending: [],
                matchSeqs: [
                    ...matchSeqs,
                    [wordI, pendWord]
                ],
                args: [...args, pendFusel],
            }

        return {
            startI,
            pending,
            matchSeqs,
            args,
        }
    }

}
