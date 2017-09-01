import * as fs from "fs"

import {
    Stream as $,
} from "xstream"

import Res from "index/com/front/loader/res"
import NodeProducer from "index/com/front/loader/node-producer"
import {O} from "lowbar/meta"

export class NeonRes extends Res {
    toChunk$(
        path :string,
    ): $<string> {
        const encoding = "utf8"
        const dataProducer :NodeProducer<{data :string}, "data"> =
            new NodeProducer(
                fs.createReadStream(path, {encoding}),
                "data",
            )
        const data$ = $.create(dataProducer)

        return data$
    }
}
