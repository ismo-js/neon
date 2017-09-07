export type Int = number & never
//…TODO How to write a proper type definition for unit types?
export function isInt(
    val :number,
): val is Int {
    return Number.isSaveInteger(val)
}

export type Pm<E> = Promise<E>
export const Pm = Promise

export const Px = Proxy

export type O = Object
export const O = Object

export * from "./to-array"
