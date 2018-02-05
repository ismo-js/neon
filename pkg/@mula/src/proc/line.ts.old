import {
    O,
    Int,
} from "neon-lowbar"

import Config from "front/config"
//…TODO Fully migrate to new `tree`
import {Lvl} from "msg/proto"
import Msg from "msg/syntax"

// ---

export const reducInit :Partial<Reduc> = {
    lineI: 0 as Int,
    indentLvl: 0 as Int,
    lines: [],
    msgs: [] as Msg[],
}

export type Line = [Int, Int[]]

export interface Reduc {
    lineI :Int
    indentLvl :Int
    lines :Line[]
    msgs :Msg[]
    cfg :Config
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

    const lines = pay.lines.concat([indentLvl, trimmed])

    const msgs = [
        ...pay.msgs,
        ...indentMsgs,
    ]

    return {
        lineI,
        indentLvl,
        lines,
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

export enum Chars {
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
