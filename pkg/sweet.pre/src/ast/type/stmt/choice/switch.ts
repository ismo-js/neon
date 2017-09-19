import {
    Lvl,
} from "ast/ast"
import Mom from "ast/complxy/stmt/choice"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Switch extends Mom {
    @mag(0x3a7c)
    match: Expr | null

    @mag(0xca5e)
    cases: Case[]
}
namespace Case {
    export enum Mag {
        bits = 0xc5,
        //…   *co*ntainer
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Case
