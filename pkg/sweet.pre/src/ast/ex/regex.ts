import {
    Lvl,
} from "ast/ast"
import Mom from "ast/complxy/ob"

const Pre = Mom.Mag; type Pre = Mom.Mag

class RegEx extends Mom {
}
namespace RegEx {
    export enum Mag {
        bits = 0x2e9,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default RegEx
