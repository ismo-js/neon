type Ms = number
type O = Object
const O = Object
const Px = Proxy
type Pm<E> = Promise<E>
const Pm = Promise

abstract class Kind<Elem> {
    [key :number /*Stamp*/]: Elem[]
}

interface KindInf<Elem> extends Kind<Elem> {}

interface State<Elem> {
    time :Ms,
    elem :Elem,
}

type Father<Elem> = new(
    state? :State<Elem>,
)=> KindLike<Elem>

type KindLike<Elem> =
    KindInf<Elem> | Iterator<Elem>
type KindProd<Elem> =
    Father<Elem> | KindLike<Elem>

enum Tag {
    Pm = "Promise",
}

interface Problem {
    text :string
}

class Stm<Elem>
      implements Promise<Elem[]> {
    constructor() {
        return new Px(this, new StmHand<Elem>())
    }

    [Symbol.toStringTag] :Tag.Pm = Tag.Pm

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

    get freeze_() :Pm<null> {

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

class StmHand<Elem>
      implements ProxyHandler<Stm<Elem>> {
    get(
        tgt :Stm<Elem>,
        prop :string,
    ) :any {
        function inProto<Tgt>(
            tgt :Tgt,
            prop :string,
        ): prop is keyof Tgt {
            const proto = O.getPrototypeOf(tgt)
            return prop in proto
        }

        const i :number = parseInt(prop)
        const isI :boolean = Number.isSaveInteger(i)

        if (isI) {
            return tgt.byIndex(i)
        } else if (inProto(tgt, prop)) {
            return tgt[prop]
        }
    }
}

class Index {
    static parse(

    ) {

    }
}

class Meta {
    static kind<Elem>() {
        return function <
              Target extends Father<Elem>>(
            tgt :Target,
        ) {
            return new Stm<Elem>()
            //…TODO! Is just Hack!
        }
    }
}

@Meta.kind<number>()
class X extends Kind<number> {
    [0] = [1, 4, 7]
}
