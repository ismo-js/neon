import bSynTs from "@babel/plugin-syntax-typescript"
import * as bTyp from "@babel/types"
import bTmp from "@babel/template"

export default ()=> ({
    inherits: bSynTs,
    visitor: {
        BinaryExpression(p) {
            p.replaceWith(
                bTyp.callExpression(
                    bTyp.identifier("__binOp"),
                    [],
                )
            )
        },
    },
})
