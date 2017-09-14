type Pm<T> = Promise<T>

import {O} from "./guards"

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

    async diff<Val>() :Pm<Val> {
        const outDest = Mirror.outDir.rel(this.relDest)
        const runDest = Mirror.runDir.rel(this.relDest)

        const [...content] =
            await Promise.all([
                fse.readJson(outDest.toJson()),
                fse.readJson(runDest.toJson()),
            ])
        const contWrap =
            content.map(e=> [e]) as [[Val], [Val]]
        const patch: fjp.Operation[] =
            (fjp.compare as Function)(...contWrap)
        //…TODO:         ^ Dumb type fix hack. Y error when removing?:
        //    `Expected 2; got 0 args.`
        const diffWrap = fjp.applyPatch([], patch).newDocument

        return diffWrap[0]
    }

    applyDiff(diff :any) {
        this.src //TODO
    }
}
