import * as fs from "fs"
import * as ph from "path"

import {detect} from "jschardet"
declare function det(
    str :string
) :{
    encoding :string,
    confidence :number,
}

import {
    Stream as $,
} from "xstream"

import {
    Encoding,
    default as Res,
} from "index/com/front/loader/res/res"
import NodeProducer from "index/com/front/loader/node-producer"
import {Pm, O} from "lowbar/meta"

/* ––^––v––^–– */
export default class FileRes extends Res {
    readonly schema = "file"

    constructor(
        path :string[]
    ) {
        super(path)
    }

    obtain(
        enc :Encoding = Encoding.utf8
    ) :Pm<string> {
        return new Pm((rsv, rjc)=> fs.readFile(
            ph.join(...this.path),
            Encoding[enc],
            (err, data)=> err
                ? rjc(err)
                : rsv(data)
        ))
    }

    toChunk$(
        enc :Encoding = Encoding.utf8,
    ) :$<string> {
        const pathStr = ph.join(...this.path)
        const encoding = Encoding[enc]
        const dataProducer :NodeProducer<{data :string}, "data"> =
            new NodeProducer(
                fs.createReadStream(pathStr, {encoding}),
                "data",
            )
        const data$ = $.create(dataProducer)

        return data$
    }

    async detEncoding() :Pm<Encoding> {
        const content :string = await this.obtain(Encoding.latin1)
        const encDet = det(content)

        switch (encDet.encoding) {
            case "UTF-8":
                return Encoding.utf8
            case "UTF-16LE":
                return Encoding.utf16le
            default:
                return Encoding.latin1
        }
    }
}
