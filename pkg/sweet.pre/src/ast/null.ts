import {Lvl, Magic} from "./ast"
import Mom from "./void"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Null extends Mom {
}
namespace Null {
    export enum Mag {
        bits = 0x101,
        lvl = ~~Lvl.Type,
        byte = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Null
