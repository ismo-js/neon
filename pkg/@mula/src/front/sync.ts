import {
    Int,
    O,
    Pm,
} from "neon-lowbar"

import {
    ConfigInter,
    CharLs,
    default as Config,
} from "./config"

// ---

export function parse(
    input :CharLs,
    configParam :ConfigInter,
) :Res {
    const config = Config.from(configParam)
    if (config.msgs.some(msg=> 0 < msg.lvl))
        return config
        //…TODO What to return?

    if (input instanceof Int32Array)
        return parse32(input, config)

    if ("string" === typeof input)
        return parse32(str2arr32(input), config)

    if (Array.isArray(input)
          && input.every(e=> Number.isSafeInteger(e))) {
        
    }
}

function str2arr32(input :string) {
    return Int32Array.from(
        input as any,
        (pointChar :any)=> (pointChar as string).codePointAt(0)!,
    )
}