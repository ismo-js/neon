export const ITER = Symbol.iterator

/*
    export type Nullable<T> = {[Prop in keyof T]: T[Prop] | null}
    export type Partial<T> = {[Prop in keyof T]?: T[Prop]}
    //… seems to be integrated in TypeScript
*/

export type Int = number & {"IS INTEGER" :1}
//…TODO How to write a proper type definition for unit types?
export function isInt(
    val :number,
): val is Int {
    return Number.isSafeInteger(val)
}
export const INF = Number.POSITIVE_INFINITY

export type Hint = "number" | "string" | "default"

export type Pm<E> = Promise<E>
export const Pm = Promise

export const Px = Proxy

export type Fn = Function
export const Fn = Function

export type O = Object
export const O = Object

export * from "./to-array"
