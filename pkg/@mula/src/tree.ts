import {
    INF,
    isInt,
    Int,
    O,
    Px,
} from "neon-lowbar"

// ---

export type Conifer<Lbl> = Tree<Lbl, Lbl>

// mapping generator:
export interface MapGenor<In, Out, Res> {
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
    (lvl :Int)=> MapGenor<Tree<In, InLf>,
          Tree<Out, OutLf>,
          (lbl :In)=> Out>

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
            
            if (isInt(prop!)) {
                return 
            }
        }

        has<Prop extends keyof Tree<Lbl, Lf>>(
            tgt :Tree<Lbl, Lf>,
            prop :Prop
        ) :true
        has(
            tgt :Tree<Lbl, Lf>,
            prop :any
        ) :boolean {
            return prop in tgt
                  || isInt(tgt.normalizeI(prop)!)
        }
    }

    readonly [key :number] :Tree<Lbl, Lf>

    protected handler = new Tree.Handler<Lbl, Lf>() 

    constructor(
        lbl :Lbl,
        edges :Iterable<Tree<Lbl, Lf>> = [],
    ) {
        return new Px(this, this.handler)
    }

    get length() {
        return 
    }

    skirt<Res, ResLf extends Res>(
        walker :Walker<Lbl, Lf, Res, ResLf>
    ) :Tree<Res, ResLf> {
        const genor = walker(this.label)
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