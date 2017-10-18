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

const leaf = Tree.leaf.bind(Tree)

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
        const triple: Cs[] = ["alpha", "beta", "gamma"]
            .map(leaf)
        const tree: Cs = new Tree(triple, "platin")
        
        t.is(tree.label, "platin")
        t.is(tree[2].label, "gamma")
        t.is(tree.length, 3)
        t.is(tree[0].label, "alpha")
    }

    @enm(true)
    tripleNegI(t :T) {
        type Cn = Tree<string, "abba" | "baab">
        const triple: Cn[] = ["baab", "abba"]//, "abba"] 
            .map(leaf)
        const tree: Cn = new Tree(triple, "baba")

        t.is(tree.length, 2)
        t.is(tree[-2].label, "baab")
    }

    @enm(true)
    iteratorIntf(t :T) {
        type Cn = Tree<string, "abba" | "bubu" | "bibi">
        const triple: Cn[] = ["bubu", "abba", "bibi"] 
            .map(leaf)
        const tree: Cn = new Tree(triple, "buub")
        const iter = tree[Symbol.iterator]()
        let value, done

        ; ({value} = iter.next(true))
        t.is((value as Cn).label, "bubu")

        ; ({value} = iter.next(true))
        t.is((value as Cn).label, "abba")

        t.is((iter.next(false).value as Cn).label, "bubu")
        t.is((iter.next(true).value as Cn).label, "abba")
        t.is((iter.next().value as Cn).label, "bibi")

        let {value: lbl} = {done} = iter.next()
        t.true(done)
        t.is(lbl, "buub")
    }
    
    @enm(true)
    getByI(t :T) {
        type Cn = Tree<string, "abba" | "baab">
        const triple: Cn[] = ["baab", "abba"]//, "abba"] 
            .map(leaf)
        const tree :Cn = new Tree(triple, "baba")

        //t.is(tree[0].label, "baab")
        t.is(tree[1].label, "abba")
    }
}