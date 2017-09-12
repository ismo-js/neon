type Pm<T> = Promise<T>
type O = Object
const O = Object

import * as fjp from "fast-json-patch"
import * as fse from "fs-extra"

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

        let contents: {out :any, run :any}
        await Promise.all([
            fse.readJson(outDest.toJson())
                .then((out: JsonVal)=> O.assign(contents, {out})),
            fse.readJson(runDest.toJson())
                .then((run: JsonVal)=> O.assign(contents, {run})),
        ])
        fjp.compare(outJson, runJson)
    }
}
