import _ from "lowbar/main"
import {
    Stream as $,
    Listener
} from "xstream"
import {
    EventEmitter as NodeEmitter
} from "events"

export interface Slotted {
    slots: {[key: string]: _.O},
}

export class NodeProducer<
      Emitter extends NodeEmitter & Slotted> {
    cb: ((pay: Emitter["slots"][string])=> void) | null = null

    constructor(
        readonly emitter: Emitter,
        readonly slot: keyof Emitter["slots"],
    ) {}

    start(listener: Listener<Emitter["slots"][string]>) {
        this.emitter.addListener(
            this.slot,
            this.cb = val => listener.next(val),
        )
    }

    stop() {
        if (!this.cb) throw "No callback"

        this.emitter.removeListener(
            this.slot,
            this.cb,
        )
    }
}
