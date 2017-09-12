type Pm<T> = Promise<T>
type O = Object
const O = Object

import {compare} from "fast-json-patch"

import Path from "./path"
import {
    Jsonable,
    JsonVal,
} from "./jsonify"

export default class Mirror {
    static readonly outDir = new Path("out/")
    static readonly runDir = new Path("run/")

    // source:
    readonly src :Jsonable | JsonVal
    // relative destination:
    readonly relDest :Path

    async diff() :Pm<Object> {
        const outDest = Mirror.outDir.rel(this.relDest)
        const runDest = Mirror.runDir.rel(this.relDest)

        let contents: {out :str, run :str}
        await Promise.all([
            (readFile() as Pm<string>)
                .then(out=> O.assign(contents, {out})),
            (readFile() as Pm<string>)
                .then(run=> O.assign(contents, {run})),
        ])
        compare(outJson, runJson)
    }
}
