import {
    Lvl,
} from "ast/ast"
import Dad from "ast/complxy/ob"

const Pre = Dad.Mag; type Pre = Dad.Mag

class Arr extends Expr<Dad> {
}
namespace Arr {
    export enum Mag {
        bits = 0xa22,
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Arr
