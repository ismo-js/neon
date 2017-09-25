/// <reference path="../../../../jsx.ts" />
import {
    Lvl,
    mag,
    tag,
} from "ast/ast"
import typ from "typ"
import Mom from "ast/complxy/stmt/choice"

const Pre = Mom.Mag; type Pre = Mom.Mag

class If extends Mom {
    @mag(0x7e57)
    @typ(Expr)
    test: Expr

    @mag(0xc025)
    @typ(Stmt)
    cons: Stmt

    @mag(0xa17e)
    @typ(Nullable, Stmt)
    alt: Stmt | null

    output() {
        return <Stmt>
            <Word>if</Word>
            <Paren>{this.test}</Paren>
            {this.cons}
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
