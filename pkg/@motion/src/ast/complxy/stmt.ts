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

abstract class StmtCls
      implements Node {
    abstract treeType :TT

    static tag(
        attrs :O,
        children :Children[],
    ) {
        const childStr = arrange(children).join("")

        return {
            toString: ()=> childStr + "; ",
        }
    }
}
const Stmt :Taggable = StmtCls
export default Stmt
