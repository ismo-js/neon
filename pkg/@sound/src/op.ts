// template entity:
export type Ent = number | Dollar

// reduction:
export interface Reduc {
    pending :Ent[],
    matches :Ent[][],
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
