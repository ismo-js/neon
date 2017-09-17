import {
    Lvl,
    TreeType,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Num extends Mom {
}
namespace Num {
    export enum Mag {
        bits = 0x123,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Num
