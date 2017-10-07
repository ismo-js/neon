import {ConfigProto} from "front/config";

// ---

class Config extends Proto {
    static type = "Configuration"

    constructor(
        readonly key :keyof ConfigProto,
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