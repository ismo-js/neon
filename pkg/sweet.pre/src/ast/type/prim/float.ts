import {
    Lvl,
    TreeType,
    ComplxyType,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Float extends Mom {
    complxyType :ComplxyType = ComplxyType.Float
}
namespace Float {
    export enum Mag {
        bits = 0xf10,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Float
