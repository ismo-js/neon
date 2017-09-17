import {
    Lvl,
    RunComplxy as RC,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Str extends Mom {
    runComplxy :RC = RC.Str
}
namespace Str {
    export enum Mag {
        bits = 0x57,
        //…   *st*ring
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Str
