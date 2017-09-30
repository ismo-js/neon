import {
    O,
    Int,
} from "neon-lowbar"

import Chars from "chars"
import {
    Ent,
    EntSeq,
    Reduc,
    arrEq,
    default as Mom,
} from "op"
import Ordering from "op/ordering"

export default class Union extends Mom {
    static readonly toks :Symbol[] = [Symbol("`|`")]
    static readonly matchers :Ent[][] =
        [[Chars.vBar as Int]]

    static reduc(
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

        if (Union.matchers.some(e=> arrEq(pendWord, e)))
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

    static seq2tok(seq :EntSeq) {
        return Union.toks[0]
    }

    constructor(
        readonly template :Ent[],
    ) {
        super()
    }

    get ast() {
        const {
            matchSeqs,
            args,
        } :Reduc = this.template.reduce(Union.reduc, {
            startI: 0 as Int,
            pending: [],
            matchSeqs: [],
            args: [],
        })
        // argument abstract syntax trees:
        const argOps: Ordering[] = args.map(arg=> new Ordering(arg))
        const ast = ([] as (Ent | Ordering)[]).concat(
            ...argOps.map((e, i)=> [
                e,
                Union.seq2tok(matchSeqs[i])
            ]),
        )

        return undefined //TODO
    }
}
