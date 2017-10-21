import {
    Int,
    isInt,
    INF,
    O,
    Pm,
} from "neon-lowbar"

import {
    Lvl,
    Lvlable,
} from "msg/proto"
import Msg from "msg/config"

// ---

export type CharLs = Int32Array | (Int|number)[] | string
export type CharNest = CharLs | CharLs[]

export abstract class ConfigProto {
    readonly indentLength :Int|number = 4
    readonly rootLvl :Int|number = 0
}
export interface ConfigInter extends Partial<ConfigProto> {}

export default class Config extends ConfigProto {
    msgs :Lvlable[] = []

    static from(
        {
            indentLength,
            rootLvl,
        } :ConfigInter,
    ) :Config {
        const asser = {
            indentLength: Config.valiLength(indentLength, 0x10 as Int),
            rootLvl: Config.valiLength(rootLvl, 0x100 as Int),
        }
        const x = ([] as Msg[]).concat(...O.entries(asser).map(
            ([k, bool])=> bool
                ? []
                : [new Msg(k as keyof ConfigProto, Lvl.red)],
        ))
    }

    protected static valiLength(
        val :number | undefined,
        max :Int = INF,
    ) {
        return isInt(val!)
              && 1 === Math.sign(val!)
              && max >= val!
    }
}