import {O, Fn} from "neon-lowbar"

export type Ty = Fn | DynamTy | any[]

export const HAS = Symbol.hasInstance

// dynamic type:
export interface DynamTy {
    [HAS](test :any) :boolean
    //…NOTE Whack shit 8^(
    //…   TypeScript does not seem to support symbols as interface keys…
}
