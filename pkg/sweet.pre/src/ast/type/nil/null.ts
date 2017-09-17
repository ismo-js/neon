import {
    Lvl,
    RunComplxy as RC,
} from "ast/ast"
import Mom from "ast/complxy/nil"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Null extends Mom {
    runComplxy :RC = RC.Null
}
namespace Null {
    export enum Mag {
        bits = 0x00,
        //…   zero
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Null
