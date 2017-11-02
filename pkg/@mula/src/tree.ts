import {
    INF,
    isInt,
    Int,
    ITER,
    O,
    Px,
} from "neon-lowbar"

// ---

// mapping iterator:
export interface MapIterator<In, Out, Res> {
    next() :{
        done :false,
        value :undefined,
    }
    next(arg :In) :{
        done :false,
        value :Out,
    }
    next(arg :In) :{
        done :true,
        value :Res,
    }
}

// walker over a `Tree<In, InLf>`; yieldin a `Tree<Out, OutLf>`:
export type Walker<In, InLf extends In, Out, OutLf extends Out> =
    (lvl :Int)=> MapIterator<Tree<In, InLf> | undefined,
          Iterable<Tree<Out, OutLf>>,
          ((lbl :In)=> Out) | undefined>

export type Conifer<Lbl> = Tree<Lbl, Lbl>

// tree graph with labels of `Lbl`, in particular leave labels of `Lf`:
export default class Tree<Lbl, Lf extends Lbl> {
    static Handler = class Handler<Lbl, Lf extends Lbl>
          implements ProxyHandler<Tree<Lbl, Lf>> {
        get<Prop extends keyof Tree<Lbl, Lf>>(
            tgt :Tree<Lbl, Lf>,
            prop :Prop,
        ) :Tree<Lbl, Lf>[Prop]
        get(
            tgt :Tree<Lbl, Lf>,
            prop :number,
        ) :Lf
        get(
            tgt :Tree<Lbl, Lf>,
            prop :any,
        ) :any {
            if (!this.has(tgt, prop))
                throw new TypeError(`\
                      "${prop}" is not a property on "${tgt.constructor.name}"`)

            const i = tgt.normalizeI(prop)!
            if (isInt(i)) return tgt.getByI(i)

            return tgt[prop]
        }

        has<Prop extends keyof Tree<Lbl, Lf>>(
            tgt :Tree<Lbl, Lf>,
            prop :Prop
        ) :true
        has(
            tgt :Tree<Lbl, Lf>,
            prop :any
        ) :boolean {
            if (isInt(tgt.normalizeI(prop)!))
                return true

            for (let proto = tgt
                ; proto
                ; proto = O.getPrototypeOf(proto)
            ) {
                const props = [
                    ...O.getOwnPropertyNames(proto),
                    ...O.getOwnPropertySymbols(proto),
                ]

                if (props.includes(prop))
                    return true
            }

            return false
        }
    }

    static leaf<Lf>(lf :Lf) :Tree<any, Lf> {
        return new this([], lf)
    }

    readonly [key :number] :Tree<Lbl, Lf>

    protected UNFIXED = Symbol("{ unfixed value placeholder }")
    //… not static to enable to:
    //  store other tree's unfixed symbols in trees in derived classes
    protected handler = new Tree.Handler<Lbl, Lf>()
    protected iter :Iterator<Tree<Lbl, Lf> | Lbl>
    protected done :boolean = false

    protected lbl_c :Lbl | symbol = this.UNFIXED
    protected edges_c :Tree<Lbl, Lf>[] = []

    //should be [lowbar@ITER] one day
    ;*[Symbol.iterator]() {
        for (let i = 0 as Int,
              val :Tree<Lbl, Lf> | undefined,
              dirc :boolean | undefined = true
            ; -1 < i && (val = this.getByI(i))
            ; i = false as boolean === dirc
                ? i-1 as Int
                : i+1 as Int
        ) dirc = yield val

        return this.lbl_c as any as Lbl
    } 

    constructor(
        protected readonly edges :Iterable<Tree<Lbl, Lf> | Lbl> = [],
        fixLbl? :Lbl,
    ) {
        const hasFixLbl = 1 < arguments.length

        if (hasFixLbl) this.lbl_c = fixLbl!
        this.iter = edges[Symbol.iterator]()
        //… should be [lowbar@ITER] one day,
        //  but TypeScript's intelligence is limited nowadays.

        return new Px(this, this.handler)
    }

    get label() :Lbl {
        if (this.UNFIXED !== this.lbl_c)
            return this.lbl_c as Lbl
        
        for (let r of this);
        //… iterates over and reads the end result as label

        return this.lbl_c as any as Lbl
    }

    get length() :Int {
        return [...this].length as Int
    }

    getByI(
        i :Int,
    ) :Tree<Lbl, Lf> | undefined {
        const c = this.edges_c
        let done :boolean = this.done
        let value :Tree<Lbl, Lf> | Lbl | undefined

        for (
            ; !done
                  && (!value || (c[c.length] = value as Tree<Lbl, Lf>))
                  && i >= c.length
            ; {done, value} = this.iter.next()
        );
            
        if (done) {
            this.done = true

            if (this.UNFIXED === this.lbl_c)
                this.lbl_c = value as Lbl
        }

        return i < c.length
            ? c[i]
            : undefined
    }

    skirt<Out, OutLf extends Out>(
        walker :Walker<Lbl, Lf, Out, OutLf>
    ) :Tree<Out, OutLf> {
        type SrcTree = Tree<Lbl, Lf>
        type OutTree = Tree<Out, OutLf>
        type Lbler = (lbl :Lbl)=> Out

        function *genor() {
            let value
                  :OutTree | Iterable<OutTree> | Lbler | undefined =
                walkIter.next().value

            for (let done = false, srcDone, srcVal
                ; !done
                ; {done: srcDone, value: srcVal} = srcIter.next()
                , {done, value} = srcDone
                    ? walkIter.next(undefined)
                    : walkIter.next(srcVal as SrcTree)
            ) if (value! instanceof Tree)
                yield value! as OutTree
            else if (value && (value as any)[ITER])
                yield* value! as Iterable<OutTree>
            else continue

            if ("function" !== typeof value)
                throw new TypeError(`\
                      Skirt label transformer is not a function!`)
            
            let lbl = (value as Lbler)(self.label)

            return lbl
        }

        const self = this
        const walkIter = walker(0 as Int)
        const srcIter = this[Symbol.iterator]()

        return new Tree(genor() as Iterable<OutTree | Out>)
    }

    protected normalizeI(
        iParam :Int | string | symbol,
    ) :Int | null {
        const relI = "number" === typeof iParam
            ? iParam
            : "symbol" === typeof iParam
            ? Number.NaN
            : parseInt(iParam as string)

        if (Number.NaN === relI) return null

        const absI = Math.abs(relI) as Int
        const normI = 0 > relI
            ? (absI > this.length
                ? null
                : (this.length - absI) as Int
            )
            : absI
        
        return normI
    }
}