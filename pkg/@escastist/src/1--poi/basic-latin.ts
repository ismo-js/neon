import {
    Int, isInt, INT,
} from "@beyond-life/lowbar"

import {
    UNIT_TERM, LINE_TERM, WHITE_SPACE,
    PoiMetadata, RefInt
} from "./kinds"

// ~~~


export default class BasicLatin {
    @RefInt [0x09] :PoiMetadata = {
        kind: WHITE_SPACE,
        name: "HTab",
    }
    @RefInt [0x0a] :PoiMetadata = {
        kind: LINE_TERM,
        name: "LFeed",
    }
    @RefInt [0x0b] :PoiMetadata = {
        kind: WHITE_SPACE,
        name: "VTab",
    }
    @RefInt [0x0c] :PoiMetadata = {
        kind: WHITE_SPACE,
        name: "FFeed",
    }
    @RefInt [0x0d] :PoiMetadata = {
        kind: LINE_TERM,
        name: "Return",
    }

    // ---

    @RefInt [0x1f] :PoiMetadata = {
        kind: UNIT_TERM,
        name: "UnitSep",
    }

    // ---

    @RefInt [0x20] :PoiMetadata = {
        kind: WHITE_SPACE,
        name: "Space",
    }
    @RefInt [0xa0] :PoiMetadata = {
        kind: WHITE_SPACE,
        name: "NoBrSpace",
    }
}