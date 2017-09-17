import {
    Lvl,
    Magic,
    Val,
} from "./ast"

abstract class Prim extends Val {

}
namespace Prim {
    enum Mag {
        bits = 0x1,
        lvl = ~~Lvl.Complxy,
        byte = bits,
    }
}
export default Prim
