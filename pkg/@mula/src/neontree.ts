export const IS_EDGE :unique symbol = Symbol("Is tree edge?")

export interface Tree {
    [IS_EDGE] :true
}
