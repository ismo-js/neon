import {
    O,
    Int,
} from "neon-lowbar"

import Tree from "./tree"
import {
    Lvl,
    SyError,
} from "./error"

const tabIndent = 4 as Int

export const reducInit :Reduc = {
    lineI: 0 as Int,
    indentLvl: 0 as Int,
    rootTree: new Tree<Int[]>([]),
    syErrors: [] as SyError[],
}

export interface Reduc {
    lineI :Int
    indentLvl :Int
    rootTree :Tree<Int[]>
    syErrors :SyError[]
}

export function parse(
    str :string,
): Tree<Int[]> {
    const lineStrs = str.split("\n")
    const lines = lineStrs.map(
        lineStr=> Array.from(lineStr, char=> char.codePointAt(0)),
    )
    const {rootTree} = lines.reduce(reduc, reducInit)

    return rootTree
}

export function reduc(
    pay :Reduc,
    line :Int[],
) :Reduc {
    const lineI = (pay.lineI + 1) as Int
    const {indentI, begin} = countIndent(line)
    const trimmed = line.slice(begin)
    const indentLvl = (indentI / tabIndent | 0) as Int
    //…rounds down
    const indentMod = (indentI % tabIndent) as Int
    const lvlDelta = indentLvl - pay.indentLvl

    const indentErrors = indentMod || 1 < lvlDelta
        ? [
            new SyError(
                lineI,
                begin,
                1 < lvlDelta ? Lvl.orange : Lvl.yellow,
                SyError.Type.indent,
            )
        ]
        : []

    const lineTree = new Tree(trimmed)
    const rootTree = pay.rootTree.concat([lineTree], indentLvl)

    const syErrors = [
        ...pay.syErrors,
        ...indentErrors,
    ]

    return {
        lineI,
        indentLvl,
        rootTree,
        syErrors,
    }
}

function countIndent(
    line :Int[],
) :{indentI :Int, begin :Int} {
    let indentI = 0 as Int
    let pointI = 0 as Int
    line: for (let point of line) switch (point) {
        case Chars.tab as Int:
            indentI = (indentI + tabIndent) as Int
            pointI++
            break
        case Chars.space as Int:
            indentI++
            pointI++
            break
        default:
            break line
    }

    return {
        indentI,
        begin: pointI,
    }
}

enum Chars {
    null = 0x00,
    // [control],
    tab = 0x09,
    feed = 0x0a,
    return = 0x0d,

    /* ––^––v––^–– */
    space = 0x20,
    bang = 0x21,
    quote = 0x22,
    hash = 0x23,

    /* ––^––v––^–– */
    dollar = 0x24,
    percent = 0x25,
    ampersand = 0x26,
    apostr = 0x27,

    /* ––^––v––^–– */
    parens_G = 0x28,
    parens_D = 0x29,
    asterisk = 0x2a,
    plus = 0x2b,

    /* ––^––v––^–– */
    comma = 0x2c,
    minus = 0x2d,
    dot = 0x2e,
    slash = 0x2f,
}
