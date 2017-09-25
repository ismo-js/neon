import {
    Lvl,
    mag,
    tag,
    xmp,
} from "ast/ast"
import typ from "typ"
import Stmt from "ast/complxy/stmt"
import Mom from "ast/complxy/stmt/loop"

const Pre = Mom.Mag; type Pre = Mom.Mag

class While extends Mom {
    @mag(0xd0b4)
    @typ(Boolean)
    doBefore: boolean = false

    @mag(0x7e57)
    @typ(Expr)
    test: Expr

    @mag(0xb0d4)
    @typ(Stmt)
    body: Stmt

    output() {
        return <Stmt>
            {this.doBefore
                ? [<Word>do</Word>, this.body]
                : []
            }
            <Word>while</Word>
            <Paren>{this.test}</Paren>
            {this.doBefore ? [] : this.body}
        </Stmt>
    }
}
namespace While {
    export enum Mag {
        bits = 0x31,
        //…   *w*hi*l*e
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default While
