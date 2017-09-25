import {
    Lvl,
    mag,
    tag,
} from "ast/ast"
import typ from "typ"
import Mom from "ast/complxy/stmt/loop"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Each extends Mom {
    //TODO properties

    output() {
        return <Stmt>
            <Word>for</Word>
            <Paren></Paren>
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
