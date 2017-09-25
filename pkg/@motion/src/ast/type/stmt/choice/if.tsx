import {
    Lvl,
    mag,
    tag,
    typ,
} from "ast/meta"
import {
    Stmt,
    Word,
} from "ast/complxy/meta"
import Mom from "ast/complxy/stmt/choice"

const Pre = Mom.Mag; type Pre = Mom.Mag

class If extends Mom {
    @mag(0x7e57)
    @typ(Expr)
    test: Expr

    @mag(0xb0d4)
    @typ(Stmt)
    body: Stmt

    @mag(0xa17e)
    @typ(Nullable, Stmt)
    alt: Stmt | null

    output() {
        return <Stmt>
            <Word>if</Word>
            <Paren>{this.test}</Paren>
            {this.body}
            {(this.alt)
                ? <Expr>
                    <Word>else</Word>
                    {this.alt}
                </Expr>
                : []
            }
        </Stmt>
    }
}
namespace If {
    export enum Mag {
        bits = 0x1f,
        //…   *if*
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default If
