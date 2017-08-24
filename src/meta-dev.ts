import {doc, StrArray} from "./doc"

namespace MetaDev {
    export function err(
        surrStrs :StrArray,
        ...vals :Object[],
    ) {
        throw new Error(doc(surrStrs, ...vals))
    }
}
