export const enum Lvl {
    // Complexity:
    Complxy = 1,
    Type = 4,
}

export declare const enum Magic {
    bits,
    lvl,
    byte,
}

export type TreeType =
    "Program" | "Literal" //TODO

export abstract class Val {
    static readonly treeType :TreeType = "Literal"
}
