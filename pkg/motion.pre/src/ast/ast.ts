import "reflect-metadata"
import {O} from "neon-lowbar"

export enum Lvl {
    // Complexity:
    Complxy = 0x04,
    Type = 0x0c,
    Expr = 0x14, //TODO Rethink level stucture
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

export interface Node {
    readonly treeType :TreeType
    readonly runComplxy :RunComplxy
    readonly output :JSX.Element
}
