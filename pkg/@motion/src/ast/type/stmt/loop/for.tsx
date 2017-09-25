import {
    Lvl,
    mag,
    tag,
    xmp,
} from "ast/ast"
import typ from "typ"
import Mom from "ast/complxy/stmt/loop"

const Pre = Mom.Mag; type Pre = Mom.Mag

class For extends Mom {
    @mag(0x1217)
    @typ(Nullable, /*TODO ?*/)
    init :Var | Expr | null

    @mag(0x7e57)
    @typ(Expr)
    test :Expr | null

    @mag(0xf12a)
    @typ(Nullable, Expr)
    finalizer :Expr | null

    @mag(0xb0d4)
    @typ(Stmt)
    body: Stmt

    output() {
        return <Stmt>
            <Word>for</Word>
            <Paren>
                {this.init};
                {this.test};
                {this.finalizer}
            </Paren>
            {this.body}
        </Stmt>
    }
}
namespace For {
    export enum Mag {
        bits = 0xf0,
        //…   *fo*r
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default For
