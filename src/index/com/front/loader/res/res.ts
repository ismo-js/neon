import * as fs from "fs"

import {
    Pm,
    O,
} from "lowbar/meta"

/* ––^––v––^–– */
export enum Encoding {
    ascii = 0xa07, // "*a*scii"
    utf8 = 0x008,
    utf16le = 0x016,
    base64 = 0x564, // *s*urrogate
    latin1 = 0xa08,
    hex = 0x516,
}

export default abstract class Res {
    readonly schema :string
    path :string[]

    constructor(
        pathParam :string[],
        readonly authority :string | null = null
    ) {
        this.path = pathParam.join("/").split("/")
        //…TODO   Handle escape sequences in path
    }

    abstract async obtain() :Pm<string>
}

export interface ResInf extends Res {}
