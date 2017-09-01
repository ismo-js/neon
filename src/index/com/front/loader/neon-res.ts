import * as fs from "fs"

import {
    Stream as $,
} from "xstream"

import Res from "index/com/front/loader/res"
import NodeProducer from "index/com/front/loader/node-producer"

export class NeonRes extends Inf.Res {
    toChunk$(
        path :string,
    ): $<string> {
        const encoding = "utf8"
        const dataProducer: NodeProducer =
            new NodeProducer(
                "data",
                fs.createReadStream(path, {encoding})
            )
        const data$ = $.fromObservable(dataProducer)

        return data$
    }
}
