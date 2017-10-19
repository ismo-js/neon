import {Readable} from "stream"

import {
    default as $,
    Observable,
    Listener,
    Stream,
    Subscription as Subscr,
} from "xstream"

import {
    O,
    Pm,
} from "neon-lowbar"

import {
    CharLs,
    ConfigInter,
    default as Config,
} from "./config"

// ---

export type Stm<E> = Readable | Stream<E>
export type CharStmLs = Stm<CharLs>[] | Stm<CharLs>

export type ReadIn = string | Buffer
export type ReadNext = (input :ReadIn)=> void

export class ReadObservable implements Observable<ReadIn> {
    constructor(
        readonly rd :Readable,
    ) {}

    subscribe(
        ober :Listener<ReadIn>,
    ) :Subscr
    subscribe(
        next :ReadNext,
        err :(err :any)=> void,
        end :()=> void,
    ) :Subscr
    subscribe(
        next :Listener<ReadIn> | ReadNext, 
        error? :(err :any)=> void,
        fin? :()=> void,
    ) :Subscr {
        const rd = this.rd
        const ober = 2 > arguments.length
            ? {
                next,
                error,
                complete: fin,
            }
            : next as Listener<ReadIn>

        rd.addListener("data", ober.next as ReadNext)
        rd.addListener("error", ober.error!)
        rd.addListener("finish", ober.complete!)

        return {
            unsubscribe() {
                rd.removeListener("data", ober)
            }
        }
    }
} 

export async function parseAsync(
    stms :CharStmLs,
    config :ConfigInter,
) :Pm<Res> {
    if (!Array.isArray(stms))
        return parseAsync([stms], config)

    for (let stmParam of stms) {
        const stm = stmParam instanceof Stream
            ? stmParam
            : $.from(new ReadObservable(stmParam))
    }
}

export function isStm(
    val :any,
) :val is Stm<any> {
    return val instanceof Readable
          || val instanceof Stream
}

