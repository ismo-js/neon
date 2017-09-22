import "reflect-metadata"

export enum Lvl {
    // Complexity:
    Complxy = 0x04,
    Type = 0x0c,
    Expr = 0x14,
}

export declare enum Magic {
    bits,
    lvl,
    byte,
}

export type TreeType =
    "Program" | "Literal" //TODO

// Run Complexity:
//…   *doesn't* exactly match the ast `Complxy` categorization system, but exactly matches the EcmaScript `typeof` operator semantics.
export enum RunComplxy {
    Any = "",
    Undef = "undefined",
    Container = "object",
    Null = Container,
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
    readonly treeType :TreeType = "Literal"
    //abstract readonly runComplxy :RunComplxy
    //…TODO move to interface
}

export abstract class Expr<Val> {

}

export function mag(
    word :number,
) {
    return Reflect.metadata("ast:mag", word)
}

export class Out {}

declare global {
    namespace JSX {
        interface Element {}
    }
}
