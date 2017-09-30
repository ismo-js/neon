import {
    O,
    Int, //TODO Find better integer typing!!!
} from "neon-lowbar"

// template entity:
export type Ent = Int | Dollar
export type EntSeq = [Int, Ent[]]

// reduction:
export interface Reduc {
    // start index:
    startI :Int,
    pending :Ent[],
    matchSeqs :EntSeq[],
    args :Ent[][],
}

// dollar entity:
export class Dollar {
    constructor(readonly val :any) {}
}

// array 1-level equality:
export function arrEq<E>(
    l :E[],
    r :E[],
) :boolean {
    return l.every((e, i)=> l[i] === e)
}

export default class Op {}
