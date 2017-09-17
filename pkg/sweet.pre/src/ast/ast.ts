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

// ComplexityType:
//…   *doesn't* exactly match the ast `Complxy` categorization system, but exactly matches the EcmaScript `typeof` operator semantics.
export enum ComplxyType {
    Void = "undefined",
    Ob = "object",
    Null = Ob,
    Bool = "boolean",
    Float = "number",
    Int = "integer",
    //… for the `BigInt` future…
    //… TODO Support ES version switching
    Str = "string",
    Callable = "function",
}

export abstract class Val {
    readonly treeType :TreeType = "Literal"
    abstract readonly complxyType :ComplxyType
}
