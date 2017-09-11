import {
    Jsonable,
    Context,
} from "./jsonify"

export default class Path implements Jsonable {
    readonly isAbs :boolean
    readonly val :string[]

    constructor(
        valParam :string | string[],
    ) {
        const val :string[] = this.val =
            "string" === typeof valParam
                ? valParam.split("/")
                : valParam
        this.isAbs = !val[0]
            ? (val.shift(), true)
            : false
    }

    toJson(
        context :Context,
        tgt? :Object | undefined,
        key? :string | undefined,
    ) :string {
        const abs :string[] = this.isAbs
            ? this.val
            : context.path.rel(this).val
        return abs.join("/")
    }

    rel(snd :Path) :Path {
        return new Path(this.val.concat(snd.val))
    }
}
