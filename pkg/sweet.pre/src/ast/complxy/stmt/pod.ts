import {
    Lvl,
    RunComplxy as RC,
    Node,
} from "ast/ast"
import Stmt from "../stmt"

abstract class Pod extends Stmt {
}
namespace Pod {
    export enum Mag {
        bits = 0x59,
        //…   *S*tatement: *p*od
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Pod
