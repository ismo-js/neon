import {Pm} from "lowbar"

import {
    Config,
    ConfigInter,
    CharLs,
} from "./front/config"
import {
    parse,
} from "./front/sync"
import {
    Stm,
    CharStmLs,
    parseAsync,
    isStm,
} from "./front/async"

// ---

export {
    Config,
    ConfigInter,
    Stm,
    CharStmLs,
    CharLs,
    parse,
    parseAsync,
}

export default async function (val :CharLs | Stm<CharLs>, config :ConfigInter) :Pm<Res> {
    if (isStm(val))
        return await parseAsync(val, config)
    return parse(val, config)
}