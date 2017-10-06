import {
    O,
    Int,
} from "neon-lowbar"

export enum Lvl {
    red,
    orange,
    yellow,
}

export class SyError {
    constructor(
        readonly lineI :Int,
        readonly pointI :Int,
        readonly lvl :Lvl,
        readonly type :SyError.Type,
    ) {}
}
export namespace SyError {
    export enum Type {
        indent = 0x12de,
    }
}
