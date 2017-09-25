import {
    mag,
} from "ast/meta"
import {
    Taggable,
    Child,
    Children,
    arrange,
} from "ast/hexer/tag"
import {O} from "neon-lowbar"

export abstract class WordCls {
    static tag(
        attrs :O,
        children :Children[],
    ) :O {
        const childStr = arrange(children).join("")

        return {
            toString: ()=> " " + childStr + " ",
        }
    }
}

const Word :Taggable = WordCls
type Word = WordCls
export default Word
