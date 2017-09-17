import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Prim extends Val {

}
namespace Prim {
    export enum Mag {
        bits = 0x1,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Prim