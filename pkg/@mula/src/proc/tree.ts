import {
    O,
    Int,
} from "neon-lowbar"

// ---

export interface Patch<E> {
    e? :E
    [key :number] :Tree<E>
}

export default class Tree<E> {
    constructor (
        readonly e :E,
        readonly subnodes :Tree<E>[] = [],
    ) {}

    replace(
        patch :Patch<E> = {},
        deepCloning :boolean = true,
    ): Tree<E> {
        const subnodes :Tree<E>[] =
            this.subnodes.map((node, i)=> i in patch
                ? patch[i]
                : deepCloning
                ? node.replace()
                : node
            )
        const additPatches = O.entries(patch).filter(
            ([i, e])=> !(i in subnodes)
        )
        for (let [i, tree] of additPatches)
            subnodes[i as any as number] = tree

        return new Tree(
            "e" in patch
                ? patch.e as E
                : this.e,
            subnodes,
        )
    }

    concat(
        tail :Tree<E>[],
        lvl :Int = 0 as Int,
        deepCloning = true,
    ) :Tree<E> {
        if (lvl > 0) {
            const patchI = this.subnodes.length - 1
            const patch :Patch<E> = {
                [patchI]: this.subnodes[patchI].concat(
                    tail,
                    (lvl - 1) as Int,
                    deepCloning,
                )
            }

            return this.replace(patch, deepCloning)
        }

        const patchOffset = this.subnodes.length
        const patches :Patch<E>[] =
            tail.map((tree, i)=> ({
                [patchOffset + i]: tree
            }))

        return this.replace(O.assign({}, ...patches), deepCloning)
    }
}
