import {
    default as Proto,
    Lvl,
} from "./proto"
import {Int} from "neon-lowbar"

// ---

class Syntax extends Proto {
    static type = "Syntax"
}
namespace Syntax {
    export enum Subj {
        indent = 0x12de,
    }
}

export default Syntax