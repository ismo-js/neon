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
        type Cn = Tree<string, "abba" | "baab" | "bibi">
        const triple: Cn[] = ["baab", "abba", "bibi"] 
            .map(leaf)
        const tree: Cn = new Tree(triple, "bubu")
        const iter = tree[Symbol.iterator]()

        console.error("==FST")
        const fst = iter.next(true)
        t.false(fst.done)
        t.is(tree.edges_c.length, 1)
        t.is((fst.value as Cn).label, "baab")

        console.error("==SND")
        const snd = iter.next(true)
        //t.false(tree.done, "After snd…")
        //t.false(snd.done)
        t.is(tree.edges_c.length, 2)
        t.is((snd.value as Cn).label, "abba")

        console.error("==3RD")
        t.is(iter.next(false).value.label, "baab")
        t.is(iter.next().value.label, "abba")
        t.is(iter.next().value.label, "bibi")
        t.true(iter.next().done)
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