import {
    Lvl,
    mag,
    tag,
} from "ast/ast"
import typ from "typ"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Branch extends Mom {
    @mag(0xc027)
    @typ(Boolean)
    continuing: boolean

    @mag(0x1ab1)
    @typ(Nullable, Ident)
    label: Ident | null

    output() {
        return <Stmt>
            <Word>
                {this.continuing ? "continue" : "break"}
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
