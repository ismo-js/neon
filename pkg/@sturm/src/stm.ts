import {
    O,
    Pm,
    Px,
    Int,
} from "@ismo/lowbar"

export class Stm<Elem> {
    constructor() {
        return new Px(this, new StmHand<Elem>())
    }

    [Symbol.toStringTag] :string = "Stm (universal stream)"
}
export default Stm

export class StmHand<Elem>
      implements ProxyHandler<Stm<Elem>> {
    get<S extends Stm<Elem>>(
        tgt :S,
        prop :keyof S,
    ) :S[typeof prop] {
        return tgt[prop]
    }
}
