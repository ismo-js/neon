import {
    mag,
    Node,
    TT,
} from "ast/meta"
import {
    Tagger,
    Child,
    Children,
    arrange,
} from "ast/hexer/tag"
import {O} from "neon-lowbar"

export class Tag implements Tagger {
    readonly childStr :string

    constructor(
        attrs :O,
        children :Children[],
    ) {
        this.childStr = arrange(children).join("")
    }

    toString() {
        return this.childStr
    }
}

abstract class Expr implements Node {
    abstract treeType :TT
}
namespace Expr {
    const T = Tag; type T = Tag
}
export default Expr
