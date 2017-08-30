import {
    Stream as $
} from "xstream"
import split from "xstream/extra/split"

import {O} from "lowbar/main"

type Char = string

//    Super kind:
export enum SprKind {
    Control = 0xc,
    //…   Functional char
    Seper = 0x5,
    //…   Seperator
    Oper = 0x0,
    //…   Operator
    Liter = 0x1,
    //…   Literal char
}

export enum Kind {
    Nothing = SprKind.Control << 0x4,
    Break = SprKind.Seper << 0x4 | 0xb,
    White = SprKind.Seper << 0x4,
    Punc = SprKind.Oper << 0x4,
    Sign = SprKind.Oper << 0x4 | 0x5,
    Num = SprKind.Oper << 0x4 | 0x1,
    Letter = SprKind.Oper << 0x4 | 0xa,
}

export enum Latin4 {
    Null = Kind.Nothing << 0x10 | 0x00,
    Tab = Kind.White << 0x10,
    Feed = Kind.Break << 0x10,
    Return = Kind.Break << 0x10,

    Space = Kind.White << 0x10,
    Bang = Kind.Punc << 0x10,
    Quote = Kind.Punc << 0x10,
    Hash = Kind.Sign << 0x10,

    Dollar = Kind.Letter << 0x10,
    Percent = Kind.Sign << 0x10,
    Ampersand = Kind.Sign << 0x10,
    Apostrophe = Kind.Punc << 0x10,
    //TODO Complete
}

console.log(Kind.Break)

function decode(
    chunk$ :$<string>
) :$<number> {
    const charMeta$ :$<$<string>> = chunk$
        .map((chunk :string): $<string>=> {
            const chars = Array.from(chunk)
            //…   uses `Iterable` interface, which iterates over code points represented as single char strings.
            return $.from<Char>(chars)
        })
    const pointChar$ :$<Char> = charMeta$.flatten()
    const point$ :$<number> = pointChar$
        .map(char=> (char as any).atCodePoint(0))
        // TODO   Anyhack. Include typings providing `String.prototype.atCodePoint`!
        //…   converts to numbers representing these code points.

    const invalPoint$ = point$
        // TODO   Handle other invalid code points
        .filter(p=> !!(~0xFFFF & p))
    // TODO   Better decoding error reporting!
    invalPoint$.map(report)

    return point$
    // TODO   Compose with `screen`!
}

function report(invalPoint :number) {
    throw "Invalid code point: { 0x"
          + invalPoint.toString(16)
          + " }!"
}

function screen(
    point$ :$<number>
) {}
