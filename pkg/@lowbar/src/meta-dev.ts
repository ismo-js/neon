import {doc, StrArray} from "./doc"

interface Symbol {
    description :string
}
declare const Symbol :(desc :string)=> Symbol

namespace Report {
    export function err(
        surrStrs :StrArray,
        ...vals :Object[],
    ) {
        throw new Error(doc(surrStrs, ...vals))
    }
}
