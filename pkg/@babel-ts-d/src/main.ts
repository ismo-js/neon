import synTs from "@babel/plugin-syntax-typescript"
import {
    //types as typ,
} from "@babel/plugin-syntax-typescript"

export default ()=> ({
    inherits: synTs,
    visitor: {
        StringLiteral(p) {
            throw p.buildCodeFrameError("No strings allowed in here!")
        },
    },
})
