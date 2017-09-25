import {
    Lvl,
    RunComplxy as RC,
    tag,
} from "ast/ast"
import typ from "typ"
import Mom from "ast/complxy/literal/ob"

const Pre = Mom.Mag; type Pre = Mom.Mag

abstract class Container extends Mom {
    runComplxy :RC = RC.Container

    output() {
        return <Expr>
            <Brace>
                {//TODO
                }
            </Brace>
        </Expr>
    }
}
namespace Container {
    export enum Mag {
        bits = 0xc0,
        //…   *co*ntainer
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Container
