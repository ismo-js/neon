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

class Directive extends Mom {
    output() {
    }
}
namespace Directive {
    export enum Mag {
        bits = 0xd1,
        //…   *di*rective
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Directive
