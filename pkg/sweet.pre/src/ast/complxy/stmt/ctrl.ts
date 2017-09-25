import {
    Lvl,
    RunComplxy as RC,
    Node,
} from "ast/ast"
import Stmt from "../stmt"

abstract class Ctrl extends Stmt {
}
namespace Ctrl {
    export enum Mag {
        bits = 0x50,
        //…   *S*tatement: c*o*trol
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ctrl
