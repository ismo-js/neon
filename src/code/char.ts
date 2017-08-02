import {Between} from "./between"
type Ob = Object

export class Char {
    readonly between :Between<number>

    constructor(between :number)
    constructor(between :Between<number>)
    constructor(between :any) {
        const doesImpl = !(between instanceof Number)

        this.between = doesImpl
            ? between
            : {l: between}
    }

    is(num :number) {
        const isBetween = undefined !== this.between.r

        return isBetween
            ? num < this.between.r && num > this.between.l
            : num === this.between.l
    }
}
