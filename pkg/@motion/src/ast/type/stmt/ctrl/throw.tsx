import {
    Lvl,
    mag,
    tag,
    typ,
} from "ast/meta"
import {
    Stmt,
    Word,
    Expr,
} from "ast/complxy/meta"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Throw extends Mom {
    @mag(0xa29e)
    @typ(Expr)
    argument: Expr

    output() {
        return <Stmt>
            <Word>throw</Word>
            {this.argument}
        </Stmt>
    }
}
namespace Throw {
    export enum Mag {
        bits = 0x73,
        //…   *t*hro*w*
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Throw
