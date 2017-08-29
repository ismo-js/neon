import * as Inf from "./main"
import * as fs from "fs"
import {
    Stream as $,
} from "xstream"
import {NodeProducer} from "index/com/front/loader/main"

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
    }
}
