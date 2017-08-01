function err(strs :TemplateStringsArray, ...vals :Object[]) {
    throw new Error(doc(strs, ...vals))
}

function decode(str :string) {
    const tokenizer = new Tokenizer()
    for (let pointChar of str) {
        const pointNum :number = pointChar.codePointAt(pointChar)
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
