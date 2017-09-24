type O = Object; const O = Object
type Fn = Function; const Fn = Function

export type Type = Fn | Iterable<Fn>

export function typ(
    head :Type,
    ...chain :Type[],
) {
    return function (
        tgt: O,
        prop :string | symbol,
        desc :PropertyDescriptor,
    ) {
        desc.set = val=> {

        }
    }
}
