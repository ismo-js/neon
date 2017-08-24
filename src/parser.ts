import {doc} from "./doc"

function err(
    strs :TemplateStringsArray,
    ...vals :Object[],
) {
    throw new Error(doc(strs, ...vals))
}

function decode(
    str :string,
) {
    const tokenizer = new Tokenizer()
    for (let pointChar of str) {
        const pointNum :number = pointChar.codePointAt(0)
        const code :Code = new Code(pointNum)

        tokenizer.emit(code)
    }
}

class Tokenizer {
    constructor() {

    }

    sym(next: number) {
        NL
    }
}
