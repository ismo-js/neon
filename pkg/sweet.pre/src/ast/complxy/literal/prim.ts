import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Prim extends Val {

}
namespace Prim {
    export enum Mag {
        bits = 0x01,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Prim
