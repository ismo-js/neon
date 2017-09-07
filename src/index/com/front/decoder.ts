import {
    Stream as $,
} from "xstream"
import split from "xstream/extra/split"

import {O} from "lowbar/meta"
import Latin from "index/com/front/code/latin/meta"

type Char = string

function chunk2$point(
    chunk$ :$<string>,
) :$<number> {
    const charMeta$ :$<$<string>> = chunk$
        .map((chunk :string) :$<string>=> {
            const chars = Array.from(chunk)
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

// Line break rating:
enum BreakRat {
    Other,
    lf = ~~Latin.feed,
    //…   `~~` casts to number for typing
    cr = ~~Latin.return,
    crLf = cr & lf,
    //… LOL   I wish Symbols were available in enums
}

const isBreak = [BreakRat.lf, BreakRat.cr].includes

function point2$line(
    point$ :$<number>,
) :$<$<number>> {
    const rat$ :$<BreakRat> = point$
        .fold(
            (l, r :number)=> {
                switch (true) {
                    case l === BreakRat.cr
                          && r === ~~BreakRat.lf:
                        return BreakRat.crLf
                    case isBreak(r):
                        return r as BreakRat
                    default:
                        return BreakRat.Other
                }
            },
            BreakRat.Other,
        )
    const sep$ = rat$.filter(isBreak)


    return //TODO
}
