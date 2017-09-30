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


export default class Ordering extends Mom {
    static readonly toks :Symbol[] = [
        Symbol("`<`"),
        Symbol("`<=`"),
        Symbol("`==`"),
        Symbol("`>=`"),
        Symbol("`>`"),
    ]
    static readonly matchers :Ent[][] = [
        [Chars.brace_G as Int],
        [Chars.brace_G as Int, Chars.equal as Int],
        [Chars.equal as Int, Chars.equal as Int],
        [Chars.brace_D as Int, Chars.equal as Int],
        [Chars.brace_D as Int],
    ]

    constructor(
        readonly ents :Ent[],
    ) {
        super()
    }
}
