import {
    Int,
    O,
    Pm,
} from "neon-lowbar"

// ---

export type CharLs = Int32Array | (Int|number)[] | string

export abstract class ConfigProto {
    indentLength :number = 4
    rootIndent :number = 0
}
export interface ConfigInter extends Partial<ConfigProto> {}

export class Config extends ConfigProto {
    static from(o :ConfigInter) {

    }
}