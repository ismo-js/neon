import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Nil extends Val {
}
namespace Nil {
    export enum Mag {
        bits = 0x00,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Nil
