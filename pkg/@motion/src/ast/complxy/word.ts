import {
    mag,
    Taggable,
    Child,
    Children,
} from "ast/meta"
import {O} from "neon-lowbar"

class WordCls {
    static tag(
        attrs :O,
        children :Children[],
    ) :O {}
}
const Word :Taggable = WordCls
export default Word
