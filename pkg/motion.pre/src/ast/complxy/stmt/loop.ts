import {
    Lvl,
    RunComplxy as RC,
    Node,
} from "ast/ast"
import Stmt from "../stmt"

abstract class Loop implements Node {
}
namespace Loop {
    export enum Mag {
        bits = 0x58,
        //…   *S*tatement: /infinity/
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Loop
