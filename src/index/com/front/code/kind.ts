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
