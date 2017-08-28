/// <reference path="0.ts" />

import {
    Stream as $,
    Listener
} from "xstream"

const Ob = Object

class NodeProducer<
      Emitter extends any> {
    //…TODO Find a better emitter supertype
    cb: ((pay: Ob)=> void) | null = null

    constructor(
        readonly emitter: Emitter,
        readonly slot: string,
    ) {}

    start(listener: Listener) {
        this.emitter.addListener(
            this.slot,
            this.cb = val => listener.next(val),
        )
    }

    stop() {
        this.emitter.removeListener(this.cb)
    }
}
