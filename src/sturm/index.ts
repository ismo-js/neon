import {Int} from "lowbar/meta"

enum Offset {
    dig = 0x30,
    "$" = 0x24,
    "-" = 0x2d,
}

export class Range {
    //TODO Gotta be pured!
    constructor(
        readonly from :Index,
        readonly till :Index,
    ) {}

    static parse(
        val :string
    ): Range {
        const section :Int = 0

        for (let char of val) {
            const point = char.codePointAt(0) || 0
            if (Offset.dig <= point
                  && Offset.dig + 9 >= point) {
                const dig = point - Offset.dig
            } else if (Offset["$"] === point
                  && !(section % 2)) {

            } else if (Offset["-"] === point) {

            }
        }

        return new Range()
    }

    static parsePoint(
        point :Int
    ) {

    }
}
