import {
    Stream as $
} from "xstream"
import split from "xstream/extra/split"

import {O} from "lowbar/main"

type Char = string

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

    const inval$ :$<number> = point$
        .filter(p=> !!(~0xFFFF & p))

    inval$.map(report)
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
