import {
    Int, isInt, INT,
} from "@beyond-life/lowbar"

import {
    UNIT_TERM, LINE_TERM, WHITE_SPACE,
    WORD_INFIX,
    PoiMetadata, RefInt,
} from "./kinds"

// ~~~

export default class GenPunct {
    @RefInt [0x200c] :PoiMetdata = {
        kind: WORD_INFIX,
        name: "0NonJoin",
    }
    @RefInt [0x200d] :PoiMetdata = {
        kind: WORD_INFIX,
        name: "0Join",
    }
}