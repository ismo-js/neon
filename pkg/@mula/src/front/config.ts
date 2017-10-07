import {
    Int,
    O,
    Pm,
} from "neon-lowbar"
import { Lvlable } from "error"

// ---

export type CharLs = Int32Array | (Int|number)[] | string

export abstract class ConfigProto {
    indentLength :Int|number = 4
    rootIndent :Int|number = 0
}
export interface ConfigInter extends Partial<ConfigProto> {}

export class Config extends ConfigProto {
    msgs :Lvlable[] = []

    static from(
        o :ConfigInter,
    ) :Config {

    }
}