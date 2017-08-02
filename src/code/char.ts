import {Between} from "./between"
type Ob = Object

export interface Chars {
    [key: string]: Char,
}

export default abstract class Char {
    readonly betweens :Between<number>[]

    constructor(
        between :number,
        opt :Object,
    )
    constructor(
        between :Between<number>[],
        opt :Object,
    )
    constructor(
        between :Between<number>,
        opt :Object,
    )
    constructor(
        between :any,
        opt :Object,
    ) {
        const isNum = between instanceof Number
        const isArray = between instanceof Array

        this.betweens = isNum
            ? [{l: between}]
            : isArray
            ? between
            : [between]
    }

    is(num :number) {
        this.betweens.reduce((
            bool :boolean,
            e :Between<number>,
        )=> {
            const isBetween = undefined !== e.r

            return bool
                || (isBetween
                    ? num < e.r && num > e.l
                    : num === e.l
                )
        }, false)
    }
}
