import {
    Lvl,
    RunComplxy as RC,
} from "ast/ast"
import Mom from "ast/complxy/literal/nil"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Undef extends Mom {
    runComplxy :RC = RC.Undef

    output() {
        return <Expr>undefined</Expr>
    }
}
namespace Undef {
    export enum Mag {
        bits = 0xdf,
        //…   un*d*e*f*ined
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Undef
