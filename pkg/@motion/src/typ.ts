import {O, Fn} from "neon-lowbar"

export type Type = Fn | Iterable<Fn> | Dynamic

export const APPLY_GENERIC = Symbol("apply generic")
export const IS_INSTANCE = Symbol("is instance?")

export interface Dynamic {
    [IS_INSTANCE](
        val :any,
    ): boolean
}

export interface Generic {
    [APPLY_GENERIC](
        arg :Type,
    ) :Type | Generic
}

function getTyp(gen :Type) :Dynamic | Generic {
    switch (gen) {
        case Array:
            return function (
                arg :Type,
            ) :Dynamic & Generic {
                return {
                    [IS_INSTANCE](val :any) :boolean {
                        return Array.isArray(val)
                    },
                    [APPLY_GENERIC](arg :Type) :Dynamic {

                    }
                }
            }
        case Fn:
            // TODO
            break
        case O:
            // TODO
            break
    }
}

export default function typ(
    head :Type | Generic,
    ...chain :Type[],
) :(
    tgt :O,
    prop :string | symbol,
    desc :PropertyDescriptor,
)=> void {
    if (chain.length) {
        const applyGen = "function" === typeof head[APPLY_GENERIC]
            ? head[APPLY_GENERIC]
            : getTyp(head)[APPLY_GENERIC] || null

        if (!applyGen)
            throw `{${head}} is not a generic type!`

        return typ(typing, chain.slice(1))
    }

    return function (tgt, prop, desc) {
        desc.set = val=> {
        }
    }
}
