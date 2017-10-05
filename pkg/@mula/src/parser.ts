import {
    O,
    Int,
} from "neon-lowbar"

const tabIndent = 4 as Int

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

export interface Reduc {
    lineI :Int
    indentLvl :Int
}

export function reduc(
    pay :Reduc,
    line :Int[],
): Reduc {
    const lineI = pay.lineI + 1 as Int
    const {indentI, pointI} = countIndent(line)
    const trimmed = line.slice(pointI)
    const indentLvl = (indentI / tabIndent | 0) as Int
    //…rounds down
    const indentMod = (indentI % tabIndent) as Int

    return {
        lineI,
        indentLvl,
    }
}

function countIndent(line :Int[]) {
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
        pointI,
    }
}
