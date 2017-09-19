import {
    Lvl,
} from "ast/ast"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Return extends Mom {
}
namespace Return {
    export enum Mag {
        bits = 0x27,
        //…   *r*e*t*urn
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Return
