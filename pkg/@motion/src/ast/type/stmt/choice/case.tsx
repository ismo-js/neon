import {
    Lvl,
    mag,
    tag,
} from "ast/meta"
import typ from "typ"
import {
    Stmt,
    Word,
} from "ast/complxy/meta"
import Mom from "ast/complxy/stmt/choice"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Case extends Mom {
    @mag(0x3a7c)
    @typ(Nullable, Expr)
    match: Expr | null

    @mag(0xc025)
    @typ(ran(1), Stmt)
    body: Stmt[]

    output() {
        return <Expr>
            <Word>case</Word>
            {this.match}
            :
            {this.body}
        </Expr>
    }
}
namespace Case {
    export enum Mag {
        bits = 0xc5,
        //…   *c*a*s*e
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Case
