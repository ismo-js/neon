import {
    Lvl,
    Val,
    ComplxyType,
} from "ast/ast"

abstract class Ob extends Val {
    complxyType :ComplxyType = ComplxyType.ObOrNull
}
namespace Ob {
    export enum Mag {
        bits = 0xa,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ob
