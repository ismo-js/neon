type O = Object; const O = Object

import Mirror from "./mirror"

export type JsonVal =
    number | string | boolean | O | null

export interface Context<Tgt> {
    mir :Mirror
    // target:
    tgt? :Tgt
    key :(keyof Tgt) | null
}

export interface Jsonable {
    toJson(
        ctx :Context,
    ) :JsonVal | undefined

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

export default function jsonify<Val>(
    mir :Mirror,
    val :Val,
    spacing :number = 4,
    //… prohibits passing spacing as a string
    diff? :Patch<Val>,
) :string {
    function cbReplace<E>(
        this :Object,
        key :string,
        e :E,
    ) :typeof e { //TODO
        if (isO(e)) {
            if (isJsonable(e)) {
                const cxt = key
                    ? {
                        mir,
                        tgt: this,
                        key: key || null,
                    }
                    : mir

                return e.toJson(cxt)
            } else {
            }
        } else {

        }
    }

    return JSON.stringify(
        val,
        cbReplace,
        spacing,
    )
}
