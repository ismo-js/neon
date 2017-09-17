import {
    Lvl,
    TreeType,
    ComplxyType,
} from "ast/ast"
import Mom from "ast/complxy/prim"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Str extends Mom {
    complxyType :ComplxyType = ComplxyType.Str
}
namespace Str {
    export enum Mag {
        bits = 0x57,
        //…   *st*ring
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Str
