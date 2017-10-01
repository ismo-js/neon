import {
    O,
    Int,
    arrEq,
} from "neon-lowbar"

import Chars from "chars"
import {
    Ent,
    EntSeq,
    Reduc,
    default as Mom,
} from "op"
import Ordering from "op/ordering"


export default class Union extends Mom {
    static readonly toks :Symbol[] = [Symbol("`|`")]
    static readonly matchers :Ent[][] = [
        [Chars.vBar as Int],
    ]

    constructor(
        readonly ents :Ent[],
    ) {
        super()
    }

    get ast() {
        const {
            matchSeqs,
            args,
        } :Reduc = this.ents.reduce(this.reduc, {
            startI: 0 as Int,
            pending: [],
            matchSeqs: [],
            args: [],
        })
        // argument abstract syntax trees:
        const argOps: Ordering[] = args.map(arg=> new Ordering(arg))
        const ast = ([] as (Symbol | Ordering)[]).concat(
            ...argOps.map((e, i)=> [
                e,
                this.seq2tok(matchSeqs[i])
            ]),
        )

        return undefined //TODO
    }

    seq2tok(seq :EntSeq) {
        return Union.toks[0]
    }
}
