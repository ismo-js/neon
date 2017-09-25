import {
    Lvl,
    RunComplxy as RC,
    tag,
} from "ast/ast"
import Mom from "ast/complxy/literal/nil"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Null extends Mom {
    runComplxy :RC = RC.Null

    output() {
        return <Expr>
            <Word>null</Word>
        </Expr>
    }
}
namespace Null {
    export enum Mag {
        bits = 0x21,
        //…   *n*ul*l*
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Null
