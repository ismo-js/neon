import {
    mag,
    Node,
    TT,
} from "ast/meta"
import {
    Taggable,
    Child,
    Children,
    arrange,
} from "ast/hexer/tag"
import {O} from "neon-lowbar"

abstract class ExprCls
      implements Node {
    abstract treeType :TT

    static tag(
        attrs :O,
        children :Children[],
    ) {
        const childStr = arrange(children).join("")

        return {
            toString: ()=> childStr,
        }
    }
}
const Expr :Taggable = ExprCls
export default Expr
