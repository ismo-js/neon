import {
    Lvl,
    Expr,
} from "ast/ast"
import Dad from "ast/complxy/ob"

const Pre = Dad.Mag; type Pre = Dad.Mag

class RegEx extends Expr<Dad> {
}
namespace RegEx {
    export enum Mag {
        bits = 0x2e9,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default RegEx
