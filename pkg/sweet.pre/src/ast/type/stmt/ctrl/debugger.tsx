import {
    Lvl,
    tag,
} from "ast/ast"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Debugger extends Mom {
    get output() {
        return <Stmt>debugger</Stmt>
    }
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
