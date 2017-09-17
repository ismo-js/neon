import {
    Lvl,
    Expr,
} from "ast/ast"
import Dad from "ast/complxy/ob"

const Pre = Dad.Mag; type Pre = Dad.Mag

class Cont extends Expr<Dad> {
}
namespace Cont {
    export enum Mag {
        bits = 0xc07,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Cont
