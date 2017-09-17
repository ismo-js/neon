export enum Lvl {
    // Complexity:
    Complxy = 0x04,
    Type = 0x10,
}

export declare enum Magic {
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
    Sym = "symbol",
}

export abstract class Val {
    abstract static readonly paramTyped :any

    readonly treeType :TreeType = "Literal"
    abstract readonly complxyType :ComplxyType
}
