import {
    Lvl,
    RunComplxy as RC,
    Node,
} from "ast/ast"

abstract class Ob implements Node {
    runComplxy :RC = RC.Container
}
namespace Ob {
    export enum Mag {
        bits = 0x0b,
        //…   Literal: *ob*ject
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ob
