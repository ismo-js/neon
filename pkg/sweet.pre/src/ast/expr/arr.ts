import {
    Lvl,
    Expr,
} from "ast/ast"
import Dad from "ast/type/ob/container"

const Pre = Dad.Mag; type Pre = Dad.Mag

class Arr extends Expr<Dad> {
}
namespace Arr {
    export enum Mag {
        bits = 0xa2,
        lvl = ~~Lvl.Expr,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Arr
