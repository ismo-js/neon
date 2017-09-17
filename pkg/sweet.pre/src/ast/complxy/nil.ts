import {
    Lvl,
    Val,
} from "./ast"

abstract class Nil extends Val {
}
namespace Nil {
    export enum Mag {
        bits = 0x0,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Nil
