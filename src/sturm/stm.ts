import {O, Pm, Px, Int} from "lowbar/meta"
import {Range} from "./index"
import Fettle from "./fettle"
import Unit from "./unit"

interface State<Elem> {
    time :[Unit.ms, Int],
    elem :Elem,
}

enum Tag {
    Pm = "Promise",
}

export interface Problem {
    text :string
}

export default class Stm<Elem>
      implements Promise<Elem[]> {
    constructor() {
        return new Px(this, new StmHand<Elem>())
    }

    [Symbol.toStringTag] :Tag.Pm = Tag.Pm
    fettle :Fettle = Fettle.Mating

    async byIndex(
        i :Index,
    ) :Pm<Elem> {
        return {
            ...await i,
        } as Elem
    }

    async asArray_(): Pm<Elem[]> {
        await this.freeze_
    }

    // A promise resolving when stream freezes:
    get freeze_() :Pm<null> {
        if (this.isFreezed) {
            return new Pm<null>((rsv, rjc)=> t)
        }
    }

    then<Next>(
        onRsv :(range :Elem[])=> Next,
        onRjc :(reason :Problem)=> Next,
    ) :Pm<Next> {
        return this.asArray_().then(onRsv, onRjc)
    }

    catch<Next>(
        onRjc :(reason :Problem)=> Next,
    ) :Pm<Next> {
        return this.asArray_().catch(onRjc)
    }
}

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
        prop :string,
    ) :any {

        const i :Range = Range.parse(prop)

        if (Index)
            return tgt.byIndex(i)
        else if (inProto(tgt, prop))
            return tgt[prop]
    }
}
