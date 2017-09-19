import {
    Lvl,
} from "ast/ast"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Try extends Mom {
}
namespace Try {
    export enum Mag {
        bits = 0x74,
        //…   *t*r*y*
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Try
