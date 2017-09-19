import {
    Lvl,
    RunComplxy as RC,
} from "ast/ast"
import Mom from "ast/complxy/literal/ob"

const Pre = Mom.Mag; type Pre = Mom.Mag

abstract class Callable extends Mom {
    runComplxy :RC= RC.Callable
}
namespace Callable {
    export enum Mag {
        bits = 0xcb,
        //…   *c*alla*b*le
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Callable
