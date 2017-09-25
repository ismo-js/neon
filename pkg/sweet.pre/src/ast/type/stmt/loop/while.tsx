import {
    Lvl,
    mag,
    tag,
} from "ast/ast"
import typ from "typ"
import Mom from "ast/complxy/stmt/loop"

const Pre = Mom.Mag; type Pre = Mom.Mag

class While extends Mom {
    //TODO properties

    output() {
        return <Stmt>
            <Word>while</Word>
        </Stmt>
    }
}
namespace While {
    export enum Mag {
        bits = 0x31,
        //…   *w*hi*l*e
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default While
