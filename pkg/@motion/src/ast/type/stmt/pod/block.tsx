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

class Block extends Mom {
    output() {
    }
}
namespace Block {
    export enum Mag {
        bits = 0xb1,
        //…   *bl*ock
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Block
