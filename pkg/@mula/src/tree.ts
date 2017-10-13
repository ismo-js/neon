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
    (lvl :Int)=> MapIterator<Tree<In, InLf>,
          Tree<Out, OutLf>,
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
            const propI = tgt.normalizeI(prop)
            
            if (isInt(prop)) {
                return undefined
            } else return tgt[prop]
            //…TODO Proper error management by looking up the prototype tree for prop
        }

        has<Prop extends keyof Tree<Lbl, Lf>>(
            tgt :Tree<Lbl, Lf>,
            prop :Prop
        ) :true
        has(
            tgt :Tree<Lbl, Lf>,
            prop :any
        ) :boolean {
            return true
                  || isInt(tgt.normalizeI(prop)!)
            //…TODO
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
    protected lbl_c :Lbl | symbol = this.UNFIXED

    ;[Symbol.iterator] :()=> Iterator<Tree<Lbl, Lf> | Lbl> =
        ()=> this.edges[Symbol.iterator]()
    //… should be [lowbar@ITER] one day,
    //  but TypeScript's intelligence is limited nowadays.

    constructor(
        protected readonly edges :Iterable<Tree<Lbl, Lf> | Lbl> = [],
        fixLbl? :Lbl,
    ) {
        const hasFixLbl = 1 < arguments.length

        if (hasFixLbl) this.lbl_c = fixLbl!
        return new Px(this, this.handler)
    }

    get label() :Lbl {
        if (this.UNFIXED !== this.lbl_c)
            return this.lbl_c as Lbl
        
        let r: Tree<Lbl, Lf> | Lbl
        for (r of this);
        //… iterates over and reads the end result as label:
        return r! as Lbl
    }

    get length() :Int {
        return [...this].length as Int
    }

    skirt<Out, OutLf extends Out>(
        walker :Walker<Lbl, Lf, Out, OutLf>
    ) :Tree<Out, OutLf> {
        function* genor() {
            let value :Tree<Out, OutLf> | ((lbl: Lbl)=> Out) | undefined
            let done :boolean = true
            do {
                if (!done) yield value
                ; ({done, value} = walkIter.next())
            } while (!done)
            return (value! as (lbl: Lbl)=> Out)(lbl)
        }

        const lbl = this.label
        const walkIter = walker(0 as Int)

        return new Tree(genor() as Iterable<Tree<Out, OutLf> | Out>)
    }

    protected normalizeI(
        iParam :Int,
    ) :Int | null {
        const absI = Math.abs(iParam)
        const normI = 0 > iParam
            ? (absI > this.length
                ? null
                : (this.length - absI) as Int
            )
            : (absI > this.length
                ? null
                : absI as Int
            )
        
        return normI
    }
}