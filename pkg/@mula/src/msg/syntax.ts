import {
    default as Proto,
    Lvl,
} from "./proto"
import {Int} from "neon-lowbar"

// ---

class Syntax extends Proto {
    static type = "Syntax"

    constructor(
        readonly key :keyof Proto,
        lvl :Lvl,
    ) {
        super(-0x5 as Int, 0 as Int, lvl)
    }
}
namespace Syntax {
    export enum Subj {
        indent = 0x12de,
    }
}

export default Syntax