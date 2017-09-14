type Pm<T> = Promise<T>

import {O} from "./guards"

import * as fjp from "fast-json-patch"
import * as fse from "fs-extra"

import Path from "./path"
import {
    Jsonable,
    JsonVal,
} from "./jsonify"

interface Simile<Val> {
    out :Val,
    run :Val,
}
export default class Mirror {
    static readonly outDir = new Path("out/")
    static readonly runDir = new Path("run/")

    // source:
    readonly src :Jsonable | JsonVal
    // relative destination:
    readonly relDest :Path

    async read<Val extends JsonVal>(
    ) :Pm<Simile<Val>> {
        const outDest = Mirror.outDir.rel(this.relDest)
        const runDest = Mirror.runDir.rel(this.relDest)
        const [out, run] =
            await Promise.all([
                fse.readJson(outDest.toJson()),
                fse.readJson(runDest.toJson()),
            ])

        return {out, run}
    }

    diff<Val extends JsonVal>(
        {out, run} :Simile<Val>
    ) :Val {
        const contWrap =
            [out, run].map(e=> [e]) as [[Val], [Val]]
        const patch: fjp.Operation[] =
            (fjp.compare as Function)(...contWrap)
        //…TODO:         ^ Dumb type fix hack. Y error when removing?:
        //    `Expected 2; got 0 args.`
        const diffWrap :[Val] | never[] =
            fjp.applyPatch([], patch).newDocument

        if ("undefined" === typeof diffWrap[0])
            throw "Patching error…"
        return diffWrap[0]
    }

    applyDiff(diff :any) {
        this.src //TODO
    }
}
