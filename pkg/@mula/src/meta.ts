import {Pm} from "neon-lowbar"

import {parseAsync} from "./front/async"

// ---

export {
    default as Config,
    ConfigInter,
    CharLs,
} from "./front/config"
export {
    parse,
} from "./front/sync"
export {
    Stm,
    CharStmLs,
    parseAsync,
} from "./front/async"

export default parseAsync