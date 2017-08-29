/// <reference path="main.ts" />

import * as fs from "fs"

import {
    Stream as $,
} from "xstream"

import {NodeProducer} from "index/com/front/loader/main"

namespace Inf {
    export class NeonRes extends Rs {
        toChunk$(
            path :string,
        ): $<string> {
            const dataProducer: NodeProducer =
                new NodeProducer(
                    "data",
                    fs.createReadStream(path, {encoding: "utf8"})
                )
        }
    }
}
