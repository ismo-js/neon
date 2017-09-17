import {
    Lvl,
    RunComplxy as RC,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Sym extends Mom {
    runComplxy :RC = RC.Sym
}
namespace Sym {
    export enum Mag {
        bits = 0x54,
        //…   *sy*mbol
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Sym
