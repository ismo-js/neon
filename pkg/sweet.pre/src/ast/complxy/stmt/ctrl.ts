import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Ctrl extends Val {

}
namespace Ctrl {
    export enum Mag {
        bits = 0x50,
        //…   *S*tatement: c*o*trol
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ctrl
