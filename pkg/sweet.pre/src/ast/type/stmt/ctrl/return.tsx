import {
    Lvl,
} from "ast/ast"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Return extends Mom {
    @mag(0xa29e)
    argument: Expr

    get output() {
        return <Stmt>
            <Word>return</Word>
            {this.argument}
        </Stmt>
    }
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
