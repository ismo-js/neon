import {
    Lvl,
    ComplxyType,
} from "ast/ast"
import Mom from "ast/complxy/ob"

const Pre = Mom.Mag; type Pre = Mom.Mag

abstract class Container extends Mom {
    complxyType :ComplxyType = ComplxyType.Container
}
namespace Container {
    export enum Mag {
        bits = 0xc0,
        //…   *co*ntainer
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Container
