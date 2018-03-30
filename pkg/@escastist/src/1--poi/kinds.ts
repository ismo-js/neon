import {
    Int, isInt, INT,
    sym,
    refKey,
} from "@beyond-life/lowbar"

// ~~~

const poiKinds = sym("Code point kind")

export const WHITE_SPACE :unique symbol =
    Symbol(poiKinds.WHITE_SPACE.toString())
export const LINE_TERM :unique symbol =
    Symbol(poiKinds.LINE_TERM.toString())
export const UNIT_TERM :unique symbol =
    Symbol(poiKinds.UNIT_TERM.toString())

export const WORD_INFIX :unique symbol =
    Symbol(poiKinds.WORD_INFIX.toString())

// ---

export type PoiKind = never
    | typeof WHITE_SPACE | typeof LINE_TERM | typeof UNIT_TERM
    | typeof WORD_INFIX

export interface PoiMetadata {
    kind :PoiKind
    name :string
}

export const RefInt = refKey(INT)