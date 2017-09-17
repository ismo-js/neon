import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Ob extends Val {
}
namespace Ob {
    export enum Mag {
        bits = 0x0b,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ob
