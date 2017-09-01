import * as fs from "fs"
import * as ph from "path"

import {
    Stream as $,
} from "xstream"

import Res from "index/com/front/loader/res"
import NodeProducer from "index/com/front/loader/node-producer"
import {O} from "lowbar/meta"

export enum Encoding {
    ascii = 0xa07, // *a*scii
    utf8 = 0x008,
    utf16le = 0x016,
    base64 = 0x564, // *s*urrogate
    latin1 = 0xa08,
    hex = 0x516,
}

export default class NeonRes extends Res {
    toChunk$(
        encoding :Encoding | null = Encoding.utf8,
    ): $<string> {
        if (!encoding) encoding = this.detEncoding()

        const pathStr = ph.join(...this.path)
        const dataProducer :NodeProducer<{data :string}, "data"> =
            new NodeProducer(
                fs.createReadStream(pathStr, {encoding}),
                "data",
            )
        const data$ = $.create(dataProducer)

        return data$
    }
}
