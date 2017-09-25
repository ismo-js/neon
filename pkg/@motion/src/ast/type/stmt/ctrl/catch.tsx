import {
    Lvl,
    mag,
    tag,
} from "ast/ast"
import typ from "typ"
import Stmt from "ast/complxy/stmt"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Catch extends Mom {
    @mag(0x9a23)
    @typ(Pattern)
    param :Pattern

    @mag(b0d4)
    @typ(Block)
    body :Block

    output() {
        return <Expr>
            <Word>catch</Word>
            <Paren>{this.param}</Paren>
            {this.body}
        </Expr>
    }
}
namespace Catch {
    export enum Mag {
        bits = 0xca,
        //…   *ca*tch
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Catch
