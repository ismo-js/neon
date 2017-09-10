import {O} from "lowbar/meta"

import {
    Stream as $,
    Listener,
} from "xstream"
import {
    EventEmitter as Emitter
} from "events"

export interface SlotTable {
    [key :string] :O,
}

export default class NodeProducer<
      Table extends SlotTable,
      Slot extends string> {
    cb: ((pay :Table[Slot])=> void) | null = null

    constructor(
        readonly emitter :Emitter,
        readonly slot :Slot,
    ) {}

    start(
        listener :Listener<Table[Slot]>
    ) {
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
