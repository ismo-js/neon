interface Context {
    locName :string,
    path :Path,
}

type JsonVal =
    number | string | boolean | Object | null | undefined

interface Jsonable {
    toJson(
        context :Context,
    ) :JsonVal
    toJson(
        context :Context,
        tgt :Object,
        prop :string,
    ) :JsonVal
}

class Path implements Jsonable {
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
        prop? :string | undefined,
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
