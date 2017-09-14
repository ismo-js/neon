export type O = Object
export const O = Object

export function isO(val :any) :val is O {
    return ["function", "object"].includes(val)
}
