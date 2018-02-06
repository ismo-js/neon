import {
    ITER,
    O,
    Int,
} from "neon-lowbar"

type UniArray = Int32Array

export class Indentable {
    static readonly lvl :unique symbol
    static readonly isHanging :unique symbol

    lvl :Int
    isHanging :boolean = false
}

export class Line {
    indentLvl :Int
    isHanging :boolean
    content :UniArray

    fromString(str) {
        const poiChars = [...str[ITER]()]
        const pois = poiChars
            |> xs.map((ch :string) :Int=> ch.codePointAt(0) as Int)
            |> Int32Array.from
    }
}
