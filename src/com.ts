
namespace Com.Front.Loader {
}

namespace Decoder {
    function main() {
        const chunk$: $<string> = path2Chunk$("./main.neon")
        const charMeta$: $<string> = chunk$
              .map(ch=> $.from(ch))
              //…   `from` uses `Iterable` interface, which iterates over code points represented as single char strings.
        const pointChar$: $<string> = charMeta$
              .switch()
              //…   merges by always switching to the newest stream produced by the high order `this` stream.
        const point$: $<number> = pointChar$
              .map(ch=> ch.atCodePoint(0))
              //…   converting to numbers representing code points.
    }
}
