import {
    Lvl,
    RunComplxy as RC,
    Node,
} from "ast/ast"

abstract class Ident implements Node {
    runComplxy :RC = RC.Any
}
namespace Ident {
    export enum Mag {
        bits = 0x91,
        //…   *P*attern: *i*dentifier
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ident
