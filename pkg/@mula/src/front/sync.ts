import {
    isInt,
    Int,
    O,
    Pm,
} from "neon-lowbar"

import {
    ConfigInter,
    CharNest,
    default as Config,
} from "./config"

// ---

export function parse(
    input :CharNest,
    configParam :ConfigInter,
) :Res {
    const config = Config.from(configParam)
    if (config.msgs.some(msg=> 0 < msg.lvl))
        return config
        //…TODO What to return?

    if (input instanceof Int32Array)
        return parse32(input, config)

    if ("string" === typeof input)
        return parse32(str2arr(input), config)

    if ("function" === typeof (input as any)[Symbol.iterator]) {
        const pointsNest = [...input].map(e=> {
            switch (typeof e) {
                case "number":
                    return [e as Int]
                case "string":
                    return str2arr<Int[]>(e as string, Array.from)
                case "object":
                    if (Array.isArray(e)
                          && e.every(eE=> isInt(eE)))
                        return e as Int[]
                    if (e instanceof Int32Array)
                        return [...e] as Int[]
                    else
                        throw new Error()
                default:
                    throw new Error() //TODO
            }
        })
        const points = ([] as Int[])
            .concat(...pointsNest)
    }
}

function str2arr<ArrTy>(
    input :string,
    constr :(
          iter :IterableIterator<string> | ArrayLike<string>,
          mapper :(e :string)=> number,
          )=> ArrTy =
        Int32Array.from as any,
) {
    return constr(
        [...input as any],
        pointChar=> (pointChar as string).codePointAt(0)! as Int,
    )
}