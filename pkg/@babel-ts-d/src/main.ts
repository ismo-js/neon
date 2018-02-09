import synTs from "@babel/plugin-syntax-typescript"
import {
    types as typ,
} from "@babel/core"

export default ()=> ({
    inherits: synTs,
    visitor: {
        BinaryExpression(p) {
            p.replaceWith(
                typ.callExpression(
                    typ.identifier("__binOp"),
                    [],
                )
            )
        },
    },
})
