import {
    Lvl,
    mag,
    tag,
} from "ast/ast"
import typ from "typ"
import Mom from "ast/complxy/stmt/loop"

const Pre = Mom.Mag; type Pre = Mom.Mag

class For extends Mom {
    //TODO properties

    output() {
        return <Stmt>
            <Word>for</Word>
            <Paren></Paren>
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
