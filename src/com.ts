import {doc, StrArray} from "./doc"
import * as fs from "fs"
import $ from "@motorcycle/stream"

namespace MetaDev {
    export function err(
        surrStrs :StrArray,
        ...vals :Object[],
    ) {
        throw new Error(doc(surrStrs, ...vals))
    }
}

namespace Com.Front.Loader {
    export function path2Chunk$(
        path :string,
    ): $<string> {
        type SmOpt = Object
              // TODO find a better way to use types with node.
        const readOpt: SmOpt = {
            encoding: "utf8",
        }

        return $.fromEvent("data", fs.createReadStream(path, readOpt))
    }
}

namespace Com.Front.Decoder {
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

namespace Com.Front.Lexer {}
namespace Com.Front.Parser {}
namespace Com.Mid.Analyser {}
