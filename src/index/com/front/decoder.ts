import {
    Stream as $
} from "xstream"

const Ob = Object
type Ob = Object

type Char = string

declare namespace Array {
    function from<Like>(
        like :Like,
        mapper? :Function,
        self? :Ob,
    ): Array<any>
}

declare function path2Chunk$(
    path :string
): $<string>

function decode() {
    const chunk$ :$<string> = path2Chunk$("./main.neon")
    const charMeta$ :$<$<string>> = chunk$
        .map((chunk :string): $<string>=> {
            const chars = Array.from<string>(chunk)
            //…   uses `Iterable` interface, which iterates over code points represented as single char strings.
            return $.from<Char>(chars)
        })
    const pointChar$ :$<Char> = charMeta$
        .flatten()
        //…   merges by always switching to the newest stream produced by the high order `this` stream.
    const point$ :$<number> = pointChar$
        .map(char=> char.atCodePoint(0))
        //…   converting to numbers representing code points.
}
