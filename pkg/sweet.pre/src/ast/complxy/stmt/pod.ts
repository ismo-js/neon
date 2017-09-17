import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Pod extends Val {

}
namespace Pod {
    export enum Mag {
        bits = 0x59,
        //…   *S*tatement: *p*od
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Pod
