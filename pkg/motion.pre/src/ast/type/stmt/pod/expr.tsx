import {
    Lvl,
    mag,
    tag,
    xmp,
    typ,
} from "ast/meta"
import Stmt from "ast/complxy/stmt"
import Mom from "ast/complxy/stmt/pod"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Expr extends Mom {
    output() {
    }
}
namespace Expr {
    export enum Mag {
        bits = 0xe9,
        //…   *e*x*p*ression
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Expr
