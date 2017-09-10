import {
    Kind,
    SprKind as Spr,
} from "index/com/front/code/kind"

enum Latin1 {
    null = Kind.Nothing
        | 0x00,
    // [control],
    tab = Kind.White
        | 0x09,
    feed = Kind.Break // "vertical tab" (Unix)
        | 0x0a,
    return = Kind.Break // (Mac)
        | 0x0d,

    /* ––^––v––^–– */
    space = Kind.White
        | 0x20,
    bang = Kind.Punc // `!`
        | 0x21,
    quote = Kind.Punc // `"`
        | 0x22,
    hash = Kind.Sign // `#`
        | 0x23,

    /* ––^––v––^–– */
    dollar = Kind.Letter
        | 0x24,
    percent = Kind.Sign
        | 0x25,
    ampersand = Kind.Sign // `&`
        | 0x26,
    apostrophe = Kind.Punc
        | 0x27,

    /* ––^––v––^–– */
    parens_l = Kind.Parens
        | 0x28,
    parens_r = Kind.Parens
        | 0x29,
    asterisk = Kind.Sign
        | 0x2a,
    plus = Kind.Sign
        | 0x2b,

    /* ––^––v––^–– */
    comma = Kind.Punc
        | 0x2c,
    minus = Kind.Sign
        | 0x2d,
    dot = Kind.Punc
        | 0x2e,
    slash = Kind.Sign
        | 0x2f,

    /* ––^––v––^–– */
    digits_0 = Kind.Num
        | 0x30,
    // …
    digits_n = Spr.Range
        | 0x39,
    colon = Kind.Punc
        | 0x3a,
    semicolon = Kind.Punc
        | 0x3b,

    /* ––^––v––^–– */
    angle_l = Kind.Angle // `<`
        | 0x3c,
    equal = Kind.Punc
        | 0x3d,
    angle_r = Kind.Angle
        | 0x3e,
    query = Kind.Punc
        | 0x3f,
}
export default Latin1
