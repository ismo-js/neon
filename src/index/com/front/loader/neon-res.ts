import {O} from "lowbar/meta"

import * as fs from "fs"

import {
    Stream as $,
} from "xstream"

import Res from "index/com/front/loader/res"
import NodeProducer from "index/com/front/loader/node-producer"

export class NeonRes extends Res {
    toChunk$(
        path :string,
    ): $<string> {
        const encoding = "utf8"
        const slots = {data: }
        const dataProducer :NodeProducer =
            new NodeProducer(
                O.assign(
                    fs.createReadStream(path, {encoding}),
                    {slots}
                ),
                "data",
            )
        const data$ = $.fromObservable(dataProducer)

        return data$
    }
}
