import {Pm} from "neon-lowbar"

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

export default async function parseAny(
    val :CharLs | CharStmLs,
    config :ConfigInter
) :Pm<Res> {
    if (isStm(val)
          || Array.isArray(val) && val.every(isStm))
        return await parseAsync(val as CharStmLs, config)
    return parse(val as CharLs, config)
}