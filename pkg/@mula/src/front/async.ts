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

enum ReadLisNames {
    next = "data",
    error = "error",
    complete = "finish",
}

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
        complete? :()=> void,
    ) :Subscr {
        const rd = this.rd
        const obver = 2 > arguments.length
            ? {next, error, complete}
            : next as Listener<ReadIn>
        const each = (O.entries(obver) as [string, Function][])
            .map(([k, lis]): [string, Function]=> [
                ReadLisNames[k as any],
                lis,
            ])
            .forEach
            
        each(([name, lis])=> rd.addListener(name, lis))

        return {
            unsubscribe() {
                each(([name, lis])=> rd.removeListener(name, lis))
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

