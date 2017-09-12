type Pm<T> = Promise<T>

import {compare} from "fast-json-patch"

import Path from "./path"
import {
    Jsonable,
    JsonVal,
} from "./jsonify"

export default class Mirror {
    static readonly out = new Path("out/")
    static readonly run = new Path("run/")

    // source:
    src :Jsonable | JsonVal
    // relative destination:
    relDest :Path

    async diff() :Pm<Object> {
        const outDir = Mirror.out.rel(this.relDest)
        const runDir = Mirror.run.rel(this.relDest)


    }
}
