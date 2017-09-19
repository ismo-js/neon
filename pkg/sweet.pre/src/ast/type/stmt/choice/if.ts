import {
    Lvl,
} from "ast/ast"
import Mom from "ast/complxy/stmt/choice"

const Pre = Mom.Mag; type Pre = Mom.Mag

class If extends Mom {
    @mag(0x7e57)
    test: Expr

    @mag(0xc025)
    cons: Stmt

    @mag(0xa17e)
    alt: Stmt | null
}
namespace If {
    export enum Mag {
        bits = 0xc0,
        //…   *co*ntainer
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default If
