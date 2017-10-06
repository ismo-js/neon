import {Readable} from "stream"
import {
    default as $,
    Stream,
} from "xstream"

import {
    ITER,
    Partial,
    Int,
    O,
    Pm,
} from "neon-lowbar"

export type Stm<E> = Readable | Stream<E>
export type CharLs = Int32Array | string

export class Config {
    indentLength :number = 4
    rootIndent :number = 0
}
export interface ConfigInter extends Partial<Config> {}

export function syncParse(
    input :(Int|number)[] | CharLs,
    config :ConfigInter,
) :Res {
    validateConfig(config)

    if (input instanceof Int32Array)
        return parse32(input, config)

    if ("string" === typeof input)
        return parse32(str2arr32(input), config)

    if (isStm(input))
        return parseStm(
            config,
        )

    if (Array.isArray(input)) {
        if (input.every(e=> "number" === typeof input)) {
        } else if (input.every(isStm)) {
            
        }
    }
}

export async function asyncParse(
    stms :Stm<CharLs>[] | Stm<CharLs>,
    config :ConfigInter,
) :Pm<Res> {
    if (!Array.isArray(stms))
        return asyncParse([stms], config)

    for (let stmParam of stms) {
        const stm = stmParam instanceof Stream
            ? stmParam
            : $.from(stmParam) //TODO typing
    }
}

function isStm(
    val :any
) :val is Stm<any> {
    return val instanceof Readable || val instanceof Stream
}

function str2arr32(input :string) {
    return Int32Array.from(
        input as any,
        (pointChar :any)=> (pointChar as string).codePointAt(0)!,
    )
}