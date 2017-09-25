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
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

export enum Action {
    continue = 0xc0,
    break = 0xb2,
}

class Branch extends Mom {
    @mag(0xac70)
    @typ(Action)
    action: Action = Action.break

    @mag(0x1ab1)
    @typ(Nullable, Ident)
    label: Ident | null

    output() {
        return <Stmt>
            <Word>
                {Action[this.action]}
            </Word>
            {this.label || []}
        </Stmt>
    }
}
namespace Branch {
    export enum Mag {
        bits = 0xb2,
        //…   *br*anch
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Branch
