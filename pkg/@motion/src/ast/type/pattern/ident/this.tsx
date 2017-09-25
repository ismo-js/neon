import {
    Lvl,
    RC,
} from "ast/meta"
import {
    Expr,
} from "ast/complxy/meta"
import Mom from "ast/complxy/expr/ident"

const Pre = Mom.Mag; type Pre = Mom.Mag

class This extends Mom {
    runComplxy :RC = RC.Any

    output() {
        return <Expr>this</Expr>
    }
}
namespace This {
    export enum Mag {
        bits = 0x75,
        //…   *t*hi*s*
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default This
