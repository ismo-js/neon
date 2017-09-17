import {
    Lvl,
    ComplxyType,
} from "ast/ast"
import Mom from "ast/complxy/nil"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Void extends Mom {
    complxyType :ComplxyType = ComplxyType.Void
}
namespace Void {
    export enum Mag {
        bits = 0x101,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Void