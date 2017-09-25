import "reflect-metadata"
import {O} from "neon-lowbar"

export enum Lvl {
    // Complexity:
    Complxy = 0x04,
    Type = 0x0c,
    Expr = 0x14, //TODO Rethink level stucture
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

export interface Node {
    readonly treeType :TreeType
    readonly runComplxy :RunComplxy
    readonly output :JSX.Element
}

export function mag(
    word :number,
) {
    return Reflect.metadata("ast:mag", word)
}

export interface Taggable {
    tag(attrs :O) :O
}

export type Child = string | O
export type Children = Child | (Child | Child[])[]
//…TODO Should be recursive, but TypeScript is dumb ;^)

export function tag(
    elemCon :Taggable,
    attrs :O | null,
    ...children :Children[],
) :JSX.Element {
    return elemCon.tag(attrs || {}, children)
}

export interface Xmpable {
    isXmpMode? :boolean
}

export function xmp(
    tgt :Xmpable,
    prop :string | symbol,
) :any {
    if (tgt.isXmpMode) {
        return [
            <var>{String(prop)}</var>,
            //…TODO Instrinsic elements…
            <code>{
                Reflect.getMetadata("ast:mag", tgt, prop)
            }</code>,
        ]
    }

    return tgt[prop]
}
