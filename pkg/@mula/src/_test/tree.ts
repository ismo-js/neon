import {test} from "ava"

import {
    default as Tree,
    Conifer,
} from "../tree"
import {
    tst,
    T,
    enm,
} from "../decava"

@tst(test)
class TreeTst {
    @enm(true)
    leafIsEmpty(t :T) {
        const leaf: Conifer<string> = Tree.leaf("platin")

        t.is(leaf.length, 0)
    }

    @enm(true)
    tripleLbl_Len(t :T) {
        type Cs = Conifer<string>
        const trip: Cs[] = ["alpha", "beta", "gamma"]
            .map(Tree.leaf.bind(Tree))
        const tree: Cs = new Tree(trip, "platin")
        
        t.is(tree.length, 3)
        t.is(tree.label, "platin")
        t.is(tree[2].label, "gamma")
    }
}