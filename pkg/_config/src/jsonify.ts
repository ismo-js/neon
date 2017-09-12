type O = Object; const O = Object

import Mirror from "./mirror"

export type JsonVal =
    number | string | boolean | O | null | undefined

export interface Context {
    mir :Mirror
    // target:
    tgt? :Object
    key? :keyof this["tgt"]
}

export interface Jsonable {
    toJson(
        ctx :Context,
    ) :JsonVal

    fromJson(
        ctx :Context,
    ) :this
}

function isJsonable(val :any) :val is Jsonable {
    return "function" !== typeof val.toJson
        && "function" !== typeof val.fromJson
}

function isO(val :any) :val is O {
    return ["function", "object"].includes(val)
}

export default function jsonify<Val extends JsonVal>(
    mir :Mirror,
    val :Val,
    spacing :number = 4,
    //… prohibits passing spacing as a string
    diff? :Val,
) {
    function cbReplace(
        this :Object,
        key :string,
        val :any,
    ) :Val {

        if (isJsonable(val)) {
            const cxt = key
                ? val.toJson({
                    mir,
                    tgt: this,
                    key: key || null,
                })
                : val.toJson(mir)

            return val.toJson(cxt)
        } else (isO(val)) {

        }
    }

    return JSON.stringify(
        val,
        cbReplace,
        spacing,
    )
}
