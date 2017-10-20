import {
    O,
    Int,
} from "neon-lowbar"

import {
    default as Proto,
    Lvl
} from "msg/proto"

// ---

class Config extends Proto {
    static type = "Configuration"

    constructor(
        readonly key :keyof Proto,
        lvl :Lvl,
    ) {
        super(-0xc as Int, 0 as Int, lvl)
    }
}
namespace Config {
    export enum Subj {
        range = 0x2a29,
    }
}

export default Config