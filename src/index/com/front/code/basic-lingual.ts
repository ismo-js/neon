//    Hirachy-specific left shifts
const enum Shi {
    Spr = 0x1c, // Super kind
    Kind = 0x18,
    Par = 0x14,
}

//    Super kind:
export enum SprKind {
    Range = // *R*ange (from `${this}_0` to `${this}_n`)
        0x2 << Shi.Spr,
    Ctl = // *C*ontrol char
        0xc << Shi.Spr,
    Seper = // *S*eperator
        0x5 << Shi.Spr,
    Encaps = // *E*ncapsulator
        0xe << Shi.Spr,
    Junc = // *J*uctor
        0x7 << Shi.Spr,
    Liter = // *L*iteral char
        0x1 << Shi.Spr,
}

export enum Kind {
    Nothing = SprKind.Ctl,

    Break = SprKind.Seper // *B*reak
        | 0xb << Shi.Kind,
    White = SprKind.Seper,

    Parens = SprKind.Encaps // Level *A*: `()`
        | 0xa << Shi.Kind,
    Bracket = SprKind.Encaps // Level *B*: `[]`
        | 0xb << Shi.Kind,
    Brace = SprKind.Encaps // Level *C*: `{}`
        | 0xc << Shi.Kind,
    Angle = SprKind.Encaps // Level *D*: `<>`
        | 0xd << Shi.Kind,

    Punc = SprKind.Junc,
    Sign = SprKind.Junc // *S*ign
        | 0x5 << Shi.Kind,

    Num = SprKind.Liter | 0x1,
    Letter = SprKind.Liter | 0xa,
}

export enum Latin1 {
    null = Kind.Nothing
        | 0x00,
    // [control],
    tab = Kind.White
        | 0x09,
    feed = Kind.Break // "vertical tab"
        | 0x0a,
    return = Kind.Break
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
    digits_n = SprKind.Range
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

export enum Latin2 {
    at = Kind.Sign // `@`
        | 0x40,
    alphabetUp_0 = Kind.Letter
        | 0x41,
    alphabetUp_n = SprKind.Range
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
    //TODO Complete!
}

export type Latin = Latin1 & Latin2
export const Latin = {...Latin1, ...Latin2}

console.log(Kind.Break)
