import {
    Lvl,
    mag,
    tag,
    typ,
} from "ast/meta"
import {
    Stmt,
    Word,
    Expr,
} from "ast/complxy/meta"
import Mom from "ast/complxy/stmt/choice"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Switch extends Mom {
    @mag(0x3a7c)
    match: Expr | null

    @mag(0xca5e)
    cases: Case[]

    output() {
        return <Stmt>
            <Word>switch</Word>
            <Paren>{this.match}</Paren>
            <Brace>{this.cases}</Brace>
        </Stmt>
    }
}
namespace Case {
    export enum Mag {
        bits = 0x53,
        //…   *sw*itch
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Case
