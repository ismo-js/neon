import {
    Lvl,
    ComplxyType,
} from "ast/ast"
import Mom from "ast/complxy/nil"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Null extends Mom {
    complxyType :ComplxyType = ComplxyType.Null
}
namespace Null {
    export enum Mag {
        bits = 0x000,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Null
