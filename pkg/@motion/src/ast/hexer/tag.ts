import "reflect-metadata"
import {O} from "neon-lowbar"

export interface Taggable {
    tag(
        attrs :O,
        children :Children[],
    ) :O
}

export type Child = string | O
export type Children = Child | (Child | Child[])[]
//…TODO Should be recursive, but TypeScript is dumb ;^)

export default function tag(
    elemCon :Taggable,
    attrs :O | null,
    ...children :Children[],
) :JSX.Element {
    return elemCon.tag(attrs || {}, children)
}

export function flatten(
    children :Children,
) :Child[] {
    if (Array.isArray(children)) {
        return ([] as (string | O)[])
            .concat(...children.map(flatten))
    } else {
        return [children]
    }
}

export function arrange(
    children :Children,
) :string[] {
    return flatten(children).map(e=> e.toString())
}
