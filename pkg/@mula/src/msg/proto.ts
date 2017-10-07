import {
    O,
    Int,
} from "neon-lowbar"

import {ConfigProto} from "front/config"

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

export abstract class MsgProto extends Error
      implements Lvlable {
    static type = "General"
    static lvlText = {
        [Lvl.red]: "error",
        [Lvl.orange]: "caution",
        [Lvl.yellow]: "warning",
        [Lvl.blue]: "notice",
    }

    constructor(
        readonly lineI :Int,
        readonly pointI :Int,
        readonly lvl :Lvl,
        readonly subj :Int = 0 as Int,
    ) {
        //TODO move message defintion out of super call, to an assignment
        super(`{ \
            @\`mula\` \
            ${new.target.type} \
            ${new.target.lvlText[lvl]} (${lvl.toString(0x10)}): \
            — \
            #${
                ((new.target as any).Subj[subj] as number)
                    .toString(0x10)
            } \
        }`)
    }
}

export class SyMsg extends MsgProto {
    static type = "Syntax"
}
export namespace SyMsg {
    export enum Subj {
        indent = 0x12de,
    }
}

export class ConfigMsg extends MsgProto {
    static type = "Configuration"

    constructor(
        readonly key :keyof ConfigProto,
        lvl :Lvl,
    ) {
        super(-0xc as Int, 0 as Int, lvl)
    }
}