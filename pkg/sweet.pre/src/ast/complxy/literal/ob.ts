import {
    Lvl,
    Node,
} from "ast/ast"

abstract class Ob implements Node {
}
namespace Ob {
    export enum Mag {
        bits = 0x0b,
        lvl = ~~Lvl.Complxy,
        word = bits,
    }
}
export default Ob
