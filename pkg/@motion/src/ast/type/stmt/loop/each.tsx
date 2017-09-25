import {
    Lvl,
    mag,
    tag,
    xmp,
    typ,
} from "ast/meta"
import {
    Stmt,
    Word,
    Expr,
} from "ast/complxy/meta"
import Mom from "ast/complxy/stmt/loop"

const Pre = Mom.Mag; type Pre = Mom.Mag

export enum Rel {
    on = 0x02,
    of = 0x0f,
}

class Each extends Mom {
    @mag(0x2e1a)
    @typ(Rel)
    rel :Rel

    @mag(0xb0d4)
    @typ(Stmt)
    body :Stmt

    output() {
        return <Stmt>
            <Word>for</Word>
            <Paren>
                {this.left}
                <Word>{Rel[this.rel]}</Word>
            </Paren>
            {this.body}
        </Stmt>
    }
}
namespace Each {
    export enum Mag {
        bits = 0xec,
        //…   *e*a*c*h
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Each
