import {
    Lvl,
} from "ast/ast"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Debugger extends Mom {
}
namespace Debugger {
    export enum Mag {
        bits = 0xdb,
        //…   *d*e*b*ugger
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Debugger
