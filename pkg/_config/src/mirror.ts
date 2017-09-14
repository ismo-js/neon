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
    diff :Val,
}
export default class Mirror {
    static readonly dirs :Simile<Path> = {
        out: new Path("out/"),
        run: new Path("run/"),
        diff: new Path("diff/"),
    }

    // source:
    readonly src :Jsonable | JsonVal
    // relative destination:
    readonly relDest :Path

    async read<Val extends JsonVal>(
    ) :Pm<Simile<Val>> {
        type SimileEntry = [keyof Simile<Path>, Path]
        const dirEntries = O.entries(Mirror.dirs) as SimileEntry[]
        const pms :Simile<Pm<Val>> = O.assign(
            {},
            ...dirEntries.map(([k, e] :SimileEntry)=> {
                return {
                    [k]: fse.readJson(e.rel(this.relDest).toJson())
                }
            })
        )
        const [out, run, diff] =
            await Promise.all([pms.out, pms.run, pms.diff])

        return {out, run, diff}
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
