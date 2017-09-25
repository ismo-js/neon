import {
    mag,
    Node,
    TreeType as TT,
    Taggable,
    Child,
    Children,
} from "ast/meta"
import {O} from "neon-lowbar"

function flatten(
    children :Children,
) :Child[] {
    if (Array.isArray(children)) {
        return ([] as (string | O)[])
            .concat(...children.map(flatten))
    } else {
        return [children]
    }
}

function arrange(
    childArr :Child[],
) :string[] {
    return childArr.map(e=> e.toString())
}

abstract class StmtCls
      implements Node {
    abstract treeType :TT
    abstract output :JSX.Element

    static tag(
        attrs :O,
        children :Children[],
    ) {
        const childStr = arrange(flatten(children)).join("")

        return {
            toString() {
                return childStr + "; "
            },
        }
    }
}
const Stmt :Taggable = StmtCls
export default Stmt
