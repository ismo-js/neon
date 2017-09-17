import {
    Lvl,
    Expr,
} from "ast/ast"
import Dad from "ast/type/ob/container"

const Pre = Dad.Mag; type Pre = Dad.Mag

class Brace extends Expr<Dad> {
}
namespace Brace {
    export enum Mag {
        bits = 0xbc,
        //…   *b*ra*c*e
        lvl = ~~Lvl.Expr,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Brace
