import {
    Lvl,
    Magic,
    Val,
} from "./ast"

abstract class Void extends Val {
}
namespace Void {
    export enum Mag {
        bits = 0x0,
        lvl = ~~Lvl.Complxy,
        byte = bits,
    }
}
export default Void
