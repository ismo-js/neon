import {
    Lvl,
    Val,
} from "ast/ast"

abstract class Ob extends Val {

}
namespace Ob {
    enum Mag {
        bits = 0xa,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
