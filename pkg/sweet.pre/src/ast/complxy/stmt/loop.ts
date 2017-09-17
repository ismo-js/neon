import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Loop extends Val {

}
namespace Loop {
    export enum Mag {
        bits = 0x58,
        //…   *S*tatement: /infinity/
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Loop
