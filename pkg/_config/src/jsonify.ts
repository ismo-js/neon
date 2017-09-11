import Path from "./path"

export interface Context {
    locName :string,
    path :Path,
}

export type JsonVal =
    number | string | boolean | Object | null | undefined

export interface Jsonable {
    toJson(
        context :Context,
    ) :JsonVal
    toJson(
        context :Context,
        tgt :Object,
        key :string,
    ) :JsonVal
}

export default function jsonify(
    context :Context,
    val :any,
    spacing :number = 4,
    //… prohibits passing spacing as a string
) {
    function cbReplace(
        this :Object,
        key :string,
        val :any,
    ) {
        if ("function" === typeof val.toJson) {
            const retVal = key
                ? val.toJson(context, this, key)
                : val.toJson(context)
        }
    }

    return JSON.stringify(
        val,
        cbReplace,
        spacing
    )
}
