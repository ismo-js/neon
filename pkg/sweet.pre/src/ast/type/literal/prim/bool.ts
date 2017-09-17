import {
    Lvl,
    RunComplxy as RC,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Bool extends Mom {
    runComplxy :RC = RC.Bool
}
namespace Bool {
    export enum Mag {
        bits = 0xb0,
        //…   *bo*olean
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Bool
