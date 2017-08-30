import {O} from "lowbar/main"
const IT = Symbol.iterator

interface Docable {}

export type StrArray = string[] | TemplateStringsArray
export function doc(
    strs :StrArray,
    ...vals :O[],
): Doc
export function doc(
    str :string,
): Doc
export function doc(
    str :any,
    ...vals :O[]
): Doc {
    const strs = str[IT]

    return new Doc(
        str.zip(vals) as (string | Docable)[]
    )
}

class Doc {
    constructor(readonly val) {

    }

    toString() {

    }
}
