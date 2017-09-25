import {
    Lvl,
    RunComplxy as RC,
    Node,
} from "ast/ast"
import Stmt from "../stmt"

abstract class Choice extends Stmt {
}
namespace Choice {
    export enum Mag {
        bits = 0x5c,
        //…   *S*tatement: *c*hoice
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Choice
