import {
    O,
    Int,
} from "neon-lowbar"

import Chars from "chars"
import {
    Ent,
    Reduc,
    arrEq,
    default as Mom,
} from "op"

export default class Union extends Mom {
    static readonly matchers :Ent[][] =
        [[Chars.ampersand as Int]]

    static reduc(
        {
            startI,
            pending: pendingParam,
            matchRanges,
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
                matchRanges: [
                    ...matchRanges,
                    [wordI, pendWord.length as Int]
                ],
                args: [...args, pendFusel],
            }

        return {
            startI,
            pending,
            matchRanges,
            args,
        }
    }

    constructor(
        readonly template :Ent[],
    ) {
        super()
    }

    get ast() {
        // reduction finish:
        const reducFin = this.template.reduce(Union.reduc, {
            startI: 0 as Int,
            pending: [],
            matchRanges: [],
            args: [],
        })

        return undefined //TODO
    }
}
