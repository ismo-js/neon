import {Lvl} from "./ast"
const Mom = Void

class Null extends Mom {
}

namespace Null {
    const enum Mag {
        bits = 0x101,
        lvl = Lvl.X4,
        byte = Mom.Mag.bits ^ bits << Mom.Mag.lvl,
    }
}

export default Null
