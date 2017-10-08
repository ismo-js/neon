import {
    INF,
    isInt,
    Int,
    O,
    Px,
} from "neon-lowbar"

// ---

export type Conifer<Lbl> = Tree<Lbl, Lbl>

export interface Generator<In, Out, Res> {
    next(arg? :In) :Out
}

export type Walker<Lbl, Lf extends Lbl, Res, ResLf extends Res> =
    (lbl: Lbl)=> Generator<Tree<Lbl, Lf>, Tree<Res, ResLf>, Res>

// tree graph with branch labels of `Br` and leave labels of `Lf`:
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
    length :Int = 0 as Int

    protected handler = new Tree.Handler<Lbl, Lf>() 

    constructor(
        label :Lbl,
        edges :Iterable<Tree<Lbl, Lf>>,
    )
    constructor() {
        return new Px(this, this.handler)
    }

    flatWalk(
        walker :Iterator<>
    ) :

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