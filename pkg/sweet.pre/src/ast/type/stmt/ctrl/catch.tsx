import {
    Lvl,
    mag,
    tag,
} from "ast/ast"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Handler extends Mom {
    @mag(0x9a23)
    @typ(Pattern)
    param :Pattern

    @mag(b0d4)
    @typ(Block)
    body :Block

    get output() {
        return <Expr>
            <Word>catch</Word>
            <Paren>{this.param}</Paren>
        </Expr>
    }
}
namespace Handler {
    export enum Mag {
        bits = 0xca,
        //…   *ca*tch
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Handler
