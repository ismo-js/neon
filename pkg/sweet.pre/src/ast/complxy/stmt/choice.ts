import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Choice extends Val {

}
namespace Choice {
    export enum Mag {
        bits = 0x5c,
        //…   *S*tatement: *c*hoice
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Choice
