import {
    O,
    Int,
} from "neon-lowbar"

import Config from "front/config"
import Tree from "./tree"
import {Lvl} from "msg/proto"
import Msg from "msg/syntax"

// ---

export const reducInit :Partial<Reduc> = {
    lineI: 0 as Int,
    indentLvl: 0 as Int,
    rootTree: new Tree<Int[]>([]),
    msgs: [] as Msg[],
}

export interface Reduc {
    lineI :Int
    indentLvl :Int
    rootTree :Tree<Int[]>
    msgs :Msg[]
    cfg :Config
}

export function parse(
    str :string,
): Tree<Int[]> {
    const lineStrs = str.split("\n")
    const lines = lineStrs.map(
        lineStr=> Array.from(lineStr, char=> char.codePointAt(0)),
    )
    const {rootTree} = lines.reduce(reduc, reducInit) as Reduc

    return rootTree
}

export function reduc(
    pay :Reduc,
    line :Int[],
) :Reduc {
    const {cfg} = pay
    const {indentLength} = cfg
    const lineI = (pay.lineI + 1) as Int
    const {indentI, begin} = countIndent(line, indentLength as Int)
    const trimmed = line.slice(begin)
    const indentLvl = (indentI / indentLength | 0) as Int
    //…rounds down
    const indentMod = (indentI % indentLength) as Int
    const lvlDelta = indentLvl - pay.indentLvl

    const indentMsgs = indentMod || 1 < lvlDelta
        ? [
            new Msg(
                lineI,
                begin,
                1 < lvlDelta ? Lvl.orange : Lvl.yellow,
                Msg.Subj.indent as Int,
            )
        ]
        : []

    const lineTree = new Tree(trimmed)
    const rootTree = pay.rootTree.concat([lineTree], indentLvl)

    const msgs = [
        ...pay.msgs,
        ...indentMsgs,
    ]

    return {
        lineI,
        indentLvl,
        rootTree,
        msgs,
        cfg,
    }
}

function countIndent(
    line :Int[],
    length :Int,
) :{indentI :Int, begin :Int} {
    let indentI = 0 as Int
    let pointI = 0 as Int
    line: for (let point of line) switch (point) {
        case Chars.tab as Int:
            indentI = (indentI + length) as Int
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
