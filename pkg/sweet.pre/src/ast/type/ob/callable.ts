import {
    Lvl,
    ComplxyType,
} from "ast/ast"
import Mom from "ast/complxy/ob"

const Pre = Mom.Mag; type Pre = Mom.Mag

abstract class Callable extends Mom {
    complxyType :ComplxyType = ComplxyType.Callable
}
namespace RegEx {
    export enum Mag {
        bits = 0xcb,
        //…   *c*alla*b*le
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default RegEx
