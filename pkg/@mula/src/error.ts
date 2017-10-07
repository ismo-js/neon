import {
    O,
    Int,
} from "neon-lowbar"

// ---

export interface Lvlable {
    lvl :Lvl
}

export enum Lvl {
    // error (negative):
    // [analogous to hexadecimal RGB:]
    red = -0xf00,
    orange = -0xfa0,
    yellow = -0xff0,

    // message (positive):
    blue = 0x00f,
}

export class SyError extends Error implements Lvlable {
    constructor(
        readonly lineI :Int,
        readonly pointI :Int,
        readonly lvl :Lvl,
        readonly type :SyError.Type,
    ) {
        super(`{\`mula\` Syntax Error: ${SyError.Type[type]}}`)
    }
}
export namespace SyError {
    export enum Type {
        indent = 0x12de,
    }
}
