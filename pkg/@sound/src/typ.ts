import {O, Fn} from "neon-lowbar"

export type Typ = Cls | Lit | Intf

interface Cls {
    prototype :O
}

interface Intf {
    [Symbol.hasInstance](test :any) :boolean
}
