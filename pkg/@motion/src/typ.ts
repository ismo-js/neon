import {O, Fn} from "neon-lowbar"

export type Type = Fn | Iterable<Fn>

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

function applySemiGen(gen :Type) {
    switch (gen) {
        case Array:
            return function (
                arg :Type,
            ) :Dynamic {
                return {
                    [IS_INSTANCE](
                        val :any,
                    ) :boolean {
                        const isArr = Array.isArray(val)
                        return isArr && true //TODO
                    },
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
) {
    if (chain.length) {
        const applyGen = "function" === typeof head[APPLY_GENERIC]
            ? head[APPLY_GENERIC]
            : applySemiGen(head as Type)

        return typ(typing, chain.slice(1))
    }

    return function (
        tgt: O,
        prop :string | symbol,
        desc :PropertyDescriptor,
    ) {
        desc.set = val=> {
            if (!(val instanceof typing))
        }
    }
}
