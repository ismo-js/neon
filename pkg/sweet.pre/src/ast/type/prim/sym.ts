import {
    Lvl,
    TreeType,
    ComplxyType,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Sym extends Mom {
    complxyType :ComplxyType = ComplxyType.Sym
}
namespace Sym {
    export enum Mag {
        bits = 0x54b,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Sym
