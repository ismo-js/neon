import {
    Lvl,
    mag,
    Node,
    TreeType as TT,
    Taggable,
    Children,
} from "ast/ast"
import {O} from "neon-lowbar"

export default abstract class Stmt
      implements Node, Taggable {
    abstract treeType :TT
    abstract output :JSX.Element

    tag(attrs :O, children :Children) {
        return {
            toString () {
                return ";"
            },
        }
    }
}
