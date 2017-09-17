import {
    Lvl,
    RunComplxy as RC,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Int extends Mom {
    runComplxy :RC = RC.Int
}
namespace Int {
    export enum Mag {
        bits = 0x12,
        //…   *in*teger
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Int
