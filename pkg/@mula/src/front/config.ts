import {
    Int,
    isInt,
    INF,
    O,
    Pm,
} from "neon-lowbar"

import {
    Lvlable,
    ConfigMsg,
} from "msg"

// ---

export type CharLs = Int32Array | (Int|number)[] | string

export abstract class ConfigProto {
    readonly indentLength :Int|number = 4
    readonly rootLength :Int|number = 0
}
export interface ConfigInter extends Partial<ConfigProto> {}

export class Config extends ConfigProto {
    msgs :Lvlable[] = []

    static from(
        {
            indentLength,
            rootLength,
        } :ConfigInter,
    ) :Config {
        const asser = {
            indentLength: Config.valiLength(indentLength, 0x10 as Int),
            rootLength: Config.valiLength(rootLength, 0x40 as Int),
        }
        const x = ([] as ConfigMsg[]).concat(...O.entries(asser).map(
            ([k, bool])=> bool
                ? []
                : [new ConfigMsg(k as keyof ConfigProto)],
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