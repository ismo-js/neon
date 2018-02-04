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
        //…TODO   Flatten children to `this.childArr`!
    ) {
        this.childStr = arrange(children).join("")
    }

    toString() {
        return " " + this.childStr + "; "
    }
}

abstract class Stmt implements Node {
    abstract treeType :TT
}
namespace Stmt {
    const T = Tag; type T = Tag
}
export default Stmt
