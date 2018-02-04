import {
    Lvl,
    RunComplxy as RC,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Float extends Mom {
    runComplxy :RC = RC.Float
}
namespace Float {
    export enum Mag {
        bits = 0xf1,
        //…   *fl*oat
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Float
