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

class Empty extends Mom {
    output() {
    }
}
namespace Empty {
    export enum Mag {
        bits = 0x00,
        //…   00 – empty
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Empty
