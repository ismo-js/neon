import {
    Lvl,
    RunComplxy as RC,
    Node,
} from "ast/ast"

abstract class Callable implements Node {
    runComplxy :RC = RC.Callable
}
namespace Callable {
    export enum Mag {
        bits = 0x0c,
        //…   Literal: *c*allable
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Callable
