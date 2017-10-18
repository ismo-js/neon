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

type Cn = Tree<string, "abib" | "abba" | "bubu" | "bibi" | "abba" | "bbab">

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
    tupelNegI(t :T) {
        const tupel: Cn[] = ["baab", "abba"]
            .map(leaf)
        const tree: Cn = new Tree(tupel, "baba")

        t.is(tree.length, 2)
        t.is(tree[-2].label, "baab")
    }

    @enm(true)
    iteratorIntf(t :T) {
        const triple: Cn[] = ["bubu", "abba", "bibi"] 
            .map(leaf)
        const tree: Cn = new Tree(triple, "bu.ub")
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
        t.is(lbl, "bu.ub")
    }
    
    @enm(true)
    getByI(t :T) {
        const triple :Cn[] = ["bbab", "abba", "abib"] 
            .map(leaf)
        const tree :Cn = new Tree(triple, "ba.ab")

        t.is(tree[1].label, "abba")
        t.is(tree[0].label, "bbab")
        t.is(tree[2].label, "abib")
    }

    @enm(true)
    skirt1(t :T) {
        type Cnum = Conifer<number>

        const triple :Cn[] = ["bubu", "bibi", "abib"]  
            .map(leaf)
        const boob :Cn = new Tree(triple, "bo.ob")
        const frtw = boob.skirt(function *() {
            let point, lf = ""
            
            do {
                lf = yield lf.length
                    ? [lf.codePointAt(0), lf.codePointAt(2)]
                    : undefined
            } while (lf)
            
            return ()=> 4.2
        })

        t.is(frtw.label, 4.2)
    }
}