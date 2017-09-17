import {
    Lvl,
    Val,
    ComplxyType,
} from "ast/ast"

abstract class Ob extends Val {
}
namespace Ob {
    export enum Mag {
        bits = 0xb,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ob
