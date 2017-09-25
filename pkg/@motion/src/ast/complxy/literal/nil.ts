import {
    Lvl,
    RunComplxy as RC,
    Node,
} from "ast/ast"

abstract class Nil implements Node {
    abstract runComplxy :RC
}
namespace Nil {
    export enum Mag {
        bits = 0x00,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Nil
