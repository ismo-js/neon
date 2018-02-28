import {O, Pm, Px, Int} from "@ismo/lowbar"

export class Stm<Elem> {
    constructor() {
        return new Px(this, new StmHand<Elem>())
    }

    [Symbol.toStringTag] :string = "Stm"
}

export default Stm

function inProto<Tgt>(
    tgt :Tgt,
    prop :string,
): prop is keyof Tgt {
    const proto = O.getPrototypeOf(tgt)
    return prop in proto
}

export class StmHand<Elem>
      implements ProxyHandler<Stm<Elem>> {
    get(
        tgt :Stm<Elem>,
        prop :keyof Stm<Elem>,
    ) :Stm<Elem>[typeof prop] {
        return tgt[prop]
    }
}
