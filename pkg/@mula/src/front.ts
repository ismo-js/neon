import {
    Int,
    O,
    ITER,
} from "neon-lowbar"
import {Readable} from "stream"

export class Config {
    indentLvlLength :number = 4
    rootIndent
}
export interface ConfigInter extends Config {}

export function parse(
    input :((Int|number) | Readable)[] | Int32Array | string,
    config :ConfigInter,
) :void {
    if (input instanceof Int32Array)
        return parse32(input, config)

    if ("string" === typeof input)
        return parse32(str2arr32(input), config)

    if (Array.isArray(input) && input.length) {
        if (input[0])

    }
}

function str2arr32(input :string) {
    return Int32Array.from(
        input as any,
        (pointChar :any)=> (pointChar as string).codePointAt(0)!,
    )
}