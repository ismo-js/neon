import {
    Lvl,
} from "ast/ast"
import Mom from "ast/complxy/ob"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Arr extends Mom {
}
namespace Arr {
    export enum Mag {
        bits = 0xa22,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Arr
