import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Ident extends Val {
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
