import {
    Lvl,
    TreeType,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Str extends Mom {
}
namespace Sym {
    export enum Mag {
        bits = 0xabc,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Sym