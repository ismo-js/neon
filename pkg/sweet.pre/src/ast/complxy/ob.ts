import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Ob extends Val {

}
namespace Ob {
    export enum Mag {
        bits = 0xa,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ob
