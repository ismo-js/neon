import {
    Lvl,
    RunComplxy as RC,
    Node,
} from "ast/ast"

abstract class Prim implements Node {
    abstract runComplxy :RC
}
namespace Prim {
    export enum Mag {
        bits = 0x01,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Prim
