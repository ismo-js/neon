type O = Object; const O = Object
type Fn = Function; const Fn = Function

export type Type = Fn | Iterable<Fn>

export const APPLY_GENERIC = Symbol("apply generic")

export interface Generic {
    [APPLY_GENERIC](arg :Type) :Type | Generic
}

function applySemiGen(gen :Type) {
    switch (gen) {
        case Array:
            // TODO
            break
        case Fn:
            // TODO
            break
        case O:
            // TODO
            break
    }
}

export function typ(
    head :Type | Generic,
    ...chain :Type[],
) {
    if (chain.length) {
        const gen = head as Generic
        const applyGen = "function" === typeof gen[APPLY_GENERIC]
            ? gen[APPLY_GENERIC]
            : applySemiGen(gen as Type)

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
