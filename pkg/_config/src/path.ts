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
        like :PathLike,
    ) {
        if ("string" === typeof like)
            like = like.split("/")
        if (like instanceof Path)
            return like

        this.val = Array.from(like)
        this.isAbs = !this.val[0]
            ? (this.val.shift(), true) // Side effect!
            : false
    }

    toJson(
        ctx? :Context,
    ) :string {
        if (!ctx) return this.join("/")
        // TODO: What is `x`? Implement!
        const abs :string[] = x.rel(this).val
        return abs.join("/")
    }

    fromJson(
        ctx :Context,
    ) :this {
        return this //TODO
    }

    // see `snd` relative to `this`:
    rel(
        sndVal :PathLike
    ) :Path {
        const snd = new Path(sndVal)
        const resVal = snd.isAbs
            ? this.val.concat(snd.val)
            : snd.val

        return new Path(resVal)
    }

    get [Symbol.toStringTag]() {
        return this.toJson()
    }
}
