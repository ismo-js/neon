import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Ident extends Val {

}
namespace Ident {
    export enum Mag {
        bits = 0x58,
        //…   *S*tatement: /infinity/
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ident
