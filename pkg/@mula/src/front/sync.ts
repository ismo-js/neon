import {
    ITER,
    Int,
    O,
    Pm,
} from "neon-lowbar"

import {
    ConfigInter,
    CharLs,
    validate,
} from "./config"

// ---

export function parse(
    input :CharLs,
    config :ConfigInter,
) :Res {
    validate(config)

    if (input instanceof Int32Array)
        return parse32(input, config)

    if ("string" === typeof input)
        return parse32(str2arr32(input), config)

    if (Array.isArray(input)
          && input.every(e=> "number" === typeof input)) {
        
    }
}

function str2arr32(input :string) {
    return Int32Array.from(
        input as any,
        (pointChar :any)=> (pointChar as string).codePointAt(0)!,
    )
}