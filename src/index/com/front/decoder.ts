import {
    Stream as $
} from "xstream"
import split from "xstream/extra/split"

import {O} from "lowbar/main"

type Char = string

//    Super kind:
export const enum SprKind {
    Control = 0xc,
    //…   Functional char
    Seper = 0x5,
    //…   Seperator
    Oper = 0x0,
    //…   Operator
    Liter = 0x1,
    //…   Literal char
}

export const enum Kind {
    Nothing = SprKind.Control << 0x10,
    Break = SprKind.Seper << 0x10 | 0xb,
    White = SprKind.Seper << 0x10,
    Punc = SprKind.Oper << 0x10,
    Sign = SprKind.Oper << 0x10 | 0x5,
    Num = SprKind.Oper << 0x10 | 0x1,
    Letter = SprKind.Oper << 0x10 | 0xa,
}

export const enum Latin4 {
    Null = Kind.Nothing,
    Tab = Kind.White,
    Feed = Kind.Break,
    Return = Kind.Break,

    Space = Kind.White,
    Bang = Kind.Punc,
    Quote = Kind.Punc,
    Hash = Kind.Sign,

    Dollar = Kind.Letter,
    Percent = Kind.Sign,
    Ampersand = Kind.Sign,
    Apostrophe = Kind.Punc,
    //TODO Complete
}

console.log(Kind.Break)

function decode(
    chunk$ :$<string>
) :$<number> {
    const charMeta$ :$<$<string>> = chunk$
        .map((chunk :string): $<string>=> {
            const chars = Array.from<string>(chunk)
            //…   uses `Iterable` interface, which iterates over code points represented as single char strings.
            return $.from<Char>(chars)
        })
    const pointChar$ :$<Char> = charMeta$.flatten()
    const point$ :$<number> = pointChar$
        .map(char=> (char as any).atCodePoint(0))
        // TODO   Anyhack. Include typings providing `String.prototype.atCodePoint`!
        //…   converts to numbers representing these code points.

    return point$
    // TODO   Compose with `screen`!
}

function screen(
    point$ :$<number>
) {
    const
}
