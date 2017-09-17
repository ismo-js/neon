import {
    Lvl,
    ComplxyType,
} from "ast/ast"
import Mom from "ast/complxy/nil"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Undef extends Mom {
    complxyType :ComplxyType = ComplxyType.Undef
}
namespace Undef {
    export enum Mag {
        bits = 0xdf,
        //…   un*d*e*f*ined
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Undef
