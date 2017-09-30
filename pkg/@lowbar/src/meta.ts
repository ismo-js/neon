export type Int = number & {"IS INTEGER" :1}
//…TODO How to write a proper type definition for unit types?
export function isInt(
    val :number,
): val is Int {
    return Number.isSafeInteger(val)
}

export type Hint = "number" | "string" | "default"

export type Pm<E> = Promise<E>
export const Pm = Promise

export const Px = Proxy

export type Fn = Function
export const Fn = Function

export type O = Object
export const O = Object

export * from "./to-array"
