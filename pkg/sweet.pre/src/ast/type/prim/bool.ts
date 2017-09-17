import {
    Lvl,
    TreeType,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Bool extends Mom {
}
namespace Bool {
    export enum Mag {
        bits = 0xb01,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Bool
