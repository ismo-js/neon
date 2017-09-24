import {
    Lvl,
    mag,
} from "ast/ast"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Throw extends Mom {
    @mag(0xa29e)
    @typ(Expr)
    argument: Expr

    get output() {
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
