import {
    Lvl,
    mag,
    Node,
    TreeType as TT,
    Taggable,
    Children,
} from "ast/ast"

type O = Object; const O = Object

export default abstract class Stmt
      implements Node, Taggable {
    abstract treeType :TT
    abstract output :JSX.Element

    tag(attrs :Object, children :Children) {
        return {
            toString () {
                return ";"
            },
        }
    }
}
