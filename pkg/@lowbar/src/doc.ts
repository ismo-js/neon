import {O} from "lowbar/main"

export type StrDoc = [string, Docable] | string

export interface Docable {}

export function doc(
    strs :Iterable<string>,
    ...vals :Docable[],
): Doc {
    function genContent(): StrDoc[] {
        const content: StrDoc[] = []
        const valsAcc = [...vals]
        //…   clone
        for (let str of strs) content[content.length] = vals.length
            ? [
                str,
                valsAcc.shift() as Docable
            ]
            : str

        return content
    }

    return new Doc(genContent())
}

export class Doc {
    constructor(readonly content :StrDoc[]) {

    }

    toString() {

    }
}
