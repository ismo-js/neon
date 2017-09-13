type Pm<T> = Promise<T>
type O = Object; const O = Object

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

    async diff() :Pm<any> {
        const outDest = Mirror.outDir.rel(this.relDest)
        const runDest = Mirror.runDir.rel(this.relDest)

        const content = (
            await Promise.all([
                fse.readJson(outDest.toJson()),
                fse.readJson(runDest.toJson()),
            ]) as [any, any]
        )
        const patch: fjp.Operation[] =
            (fjp.compare as Function)(...content)
        //…TODO:         ^ Dumb type fix hack. Y error when removing?:
        //    `Expected 2; got 0 args.`

        return fjp.applyPatch({}, patch).newDocument
    }

    applyDiff(diff :any) {
        this.src //TODO
    }
}
