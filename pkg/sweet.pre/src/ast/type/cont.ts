import {
    Lvl,
} from "ast/ast"
import Mom from "ast/complxy/ob"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Cont extends Mom {
}
namespace Cont {
    export enum Mag {
        bits = 0xc07,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Cont
