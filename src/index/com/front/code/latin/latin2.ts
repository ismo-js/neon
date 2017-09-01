import {
    Kind,
    SprKind as Spr,
} from "index/com/front/code/kind"

export enum Latin2 {
    at = Kind.Sign // `@`
        | 0x40,
    alphabetUp_0 = Kind.Letter
        | 0x41,
    alphabetUp_n = Spr.Range
        | 0x5a,
    bracket_l = Kind.Bracket
        | 0x5b,
    backslash = Kind.Sign
        | 0x5c,
    bracket_r = Kind.Bracket
        | 0x5d,
    circumflex = Kind.Punc // `_` is a letter!
        | 0x5e,
    lowBar = Kind.Letter // `_` is a letter!
        | 0x5f,

    /* ––^––v––^–– */
    grave = Kind.Punc // {`}
        | 0x60,
}
export default Latin2
