import "reflect-metadata"
import {O} from "neon-lowbar"

export declare enum Magic {
    bits,
    lvl,
    byte,
}

export default function mag(
    word :number,
) {
    return Reflect.metadata("ast:mag", word)
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
