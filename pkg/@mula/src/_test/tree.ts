import {test} from "ava"

import Tree from "../tree"
import {
    tst,
    T,
    enm,
} from "../decava"

@tst(test)
class TreeTst {
    x = "xx"

    @enm(true)
    leafIsEmpty(t :T) {
        const leaf = Tree.leaf(4)
        t.is(leaf.length, 0)
    }
}