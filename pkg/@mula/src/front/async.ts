import {Readable} from "stream"

import {
    default as $,
    Stream,
} from "xstream"

import {
    O,
    Pm,
} from "neon-lowbar"

import {
    CharLs,
    Config,
    ConfigInter,
} from "./config"

// ---

export type Stm<E> = Readable | Stream<E>
export type CharStmLs = Stm<CharLs>[] | Stm<CharLs>

export async function parseAsync(
    stms :CharStmLs,
    config :ConfigInter,
) :Pm<Res> {
    if (!Array.isArray(stms))
        return parseAsync([stms], config)

    for (let stmParam of stms) {
        const stm = stmParam instanceof Stream
            ? stmParam
            : $.from(stmParam) //TODO typing
    }
}

export function isStm(
    val :any
) :val is Stm<any> {
    return val instanceof Readable || val instanceof Stream
}

