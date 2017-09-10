import {Int, O, Hint} from "lowbar/meta"

export enum Offset {
    dig = 0x30,
    "$" = 0x24,
    "-" = 0x2d,
}

export default class Range {
    //TODO Gotta be pured!
    constructor(
        readonly from :Index,
        readonly till :Index,
    ) {
    }

    static parse(
        val :string,
    ) :Range {
        const section :Int = 0

        for (let char of val) {
            const point = char.codePointAt(0) || 0

            Range.parsePoint(point)
        }

        return new Range(from, till)
    }

    protected static parsePoint(
        point :Int,
        section :Int = 0,
    ) :[Offset, Int] | null {
        if (Offset.dig <= point
              && Offset.dig + 9 >= point)
            return [Offset.dig, point - Offset.dig]
        else if (Offset["$"] === point
              && !(section % 2))
            return [Offset["$"], 0]
        else if (Offset["-"] === point
              && !!(section % 2))
            return [Offset["-"], 0]
        else return null
    }

    [Symbol.toPrimitive](
        hint :Hint
    ) {

    }
}
