import {
    Jsonable,
    Context,
} from "./jsonify"

export type PathLike =
    Path | ArrayLike<string> | string

export default class Path
      implements Jsonable {
    readonly isAbs :boolean
    readonly val :string[]

    constructor(
        like :PathLike
    ) {
        const val = this.val =
            "string" === typeof like
                ? valParam.split("/")
                : valParam

        if (val instanceof Path)
            return val

        this.isAbs = !val[0]
            ? (val.shift(), true)
            : false
    }

    toJson(
        ctx :Context,
    ) :string {
        // TODO: What is `x`? Implement!
        const abs :string[] = x.rel(this).val
        return abs.join("/")
    }

    // see `snd` relative to `this`:
    rel(sndVal :PathLike) :Path {
        const snd = new Path(sndVal)
        const resVal = snd.isAbs
            ? this.val.concat(snd.val)
            : snd.val

        return new Path(resVal)
    }
}
