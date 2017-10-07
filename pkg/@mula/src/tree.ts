import {
    INF,
    isInt,
    Int,
    O,
    Px,
} from "neon-lowbar"

// ---

type Conifer<Node> = Tree<Node, Node>

class Tree<Node, Leaf> {
    [key :number] :Tree<Node, Leaf>
    length :Int = 0 as Int

    protected handler :ProxyHandler<this> = {
        set(
            tgt :Conifer<any>,
            prop :PropertyKey,
            val :any,
        ) :boolean {
            const propInt = Number.parseInt(prop as any)
            if (isInt(propInt))
               return tgt.setI(propInt, val)

            if (prop in this) {
                tgt[prop as any] = val
                return true
            }

            return false
        },
    }

    set ["new"](val :Tree<Node, Leaf>) {
        this[this.length] = val
    }

    constructor(
        node :Node,
        leaves :Iterable<Leaf>,
    ) {
        return new Px(this, this.handler)
    }

    protected setI(
        int :Int,
        val :Tree<Node, Leaf>,
    ) :boolean {
        if (!(val instanceof Tree))
            return false

        const propAbs = Math.abs(int)
        const propI = 0 > int
            ? (propAbs > this.length
                ? Number.NaN
                : this.length - propAbs
            )
            : (propAbs > this.length
                ? Number.NaN
                : propAbs
            )
        
        if (Number.NaN === propI)
            return false

        // TODO
        return true
    }
}