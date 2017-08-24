type Ob = Object

const IT = Symbol.iterator

interface Docable {}

export function doc(
    strs :TemplateStringsArray,
    ...vals :Ob[],
): Doc
export function doc(
    str :string,
): Doc
export function doc(
    str :any,
    ...vals :Ob[]
): Doc {
    const strs = str[IT]

    return new Doc(
        str.zip(vals) as (string | Docable)[]
    )
}

class Doc {
    constructor(readonly value) {

    }
}
