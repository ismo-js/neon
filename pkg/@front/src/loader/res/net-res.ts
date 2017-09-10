import {
    Stream as $,
} from "xstream"

import {
    Encoding,
    default as Res,
} from "index/com/front/loader/res/res"
import {Pm, O} from "lowbar/meta"

/* ––^––v––^–– */
export default class NetRes extends Res {
    constructor(
        readonly schema :Schema
    ) {
        super()
        //TODO
    }
}
