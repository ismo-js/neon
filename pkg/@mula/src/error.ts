import {
    O,
    Int,
} from "neon-lowbar"

export enum Lvl {
    red,
    orange,
    yellow,
}

export class SyError extends Error {
    constructor(
        readonly lineI :Int,
        readonly pointI :Int,
        readonly lvl :Lvl,
        readonly type :SyError.Type,
    ) {
        super("{Syntax Error: + " + SyError.Type[type] + "}")
    }
}
export namespace SyError {
    export enum Type {
        indent = 0x12de,
    }
}
