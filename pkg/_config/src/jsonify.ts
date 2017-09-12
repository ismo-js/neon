import Mirror from "./mirror"

export type JsonVal =
    number | string | boolean | Object | null | undefined

export interface Context {
    mir :Mirror,
    // target:
    tgt? :Object,
    key? :keyof this["tgt"],
}

export interface Jsonable {
    toJson(
        ctx :Context,
    ) :JsonVal

    fromJson(
        ctx :Context,
    ) :this
}

export default function jsonify(
    mir :Mirror,
    val :any,
    spacing :number = 4,
    //… prohibits passing spacing as a string
) {
    function cbReplace(
        this :Object,
        key :string,
        val :any,
    ) :any {
        return "function" !== typeof val.toJson
            ? val
            : key
            ? val.toJson(mir, this, key)
            : val.toJson(mir)
    }

    return JSON.stringify(
        val,
        cbReplace,
        spacing
    )
}
