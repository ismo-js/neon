type Ob = Object

function doc(
    strs :TemplateStringsArray,
    ...vals :Ob[],
): Doc {
    return new Doc(
        strs.zip(vals)
    )
}

class Doc {
    constructor() {

    }
}

export class Code {
    static basic = {
        //control,
        space: 0x20,
        bang: 0x21,
        quote: 0x22,
        sharp: 0x23,

        dollar: 0x24,
        percent: 0x25,
        ampersand: 0x26,
        apostrophe: 0x27,

        parens: {
            l: 0x28,
            r: 0x29,
        },
        asterisk: 0x2a,
        plus: 0x2b,

        comma: 0x2c,
        minus: 0x2d,
        dot: 0x2e,
        slash: 0x2f,

        digits: [0x30, 0x39],
        colon: 0x3a,
        semicolon: 0x3b,

        less: 0x3c,
        equal: 0x3d,
        greater: 0x3e,
        query: 0x3f,

        at: 0x40,
        alphabetUp: [0x41, 0x5a],
        bracket: {
            l: 0x5b,
            r: 0x5d, //!
        },
        backslash: 0x5c, //!
        circumflex: 0x5e,
        lowBar: 0x5f,

        grave: 0x60,
        alphabetLow: [0x61, 0x7a],
        brace: {
            l: 0x7b,
            r: 0x7d, //!
        },
        vertical: 0x7c,
        tilde: 0x7e,
        //control: delete,
    }

    static supplement = {
        //control,
        unbreakable: 0xa0,
        bangInv: 0xa1,
        cent: 0xa2,
        pound: 0xa3,

        general: 0xa4,
        yen: 0xa5,
        broken: 0xa6,
        section: 0xa7,

        diaeresis: 0xa8,
        copyRight: 0xa9,
        ordinalFem: 0xaa,
        angle2: {
            l: 0xab,
            r: 0xbb, //!
        },

        not: 0xac,
        shy: 0xad,
        tradeMark: 0xae,
        highBar: 0xaf,

        degree: 0xb0,
        plusMinus: 0xb1,
        super2: 0xb2,
        super3: 0xb3,

        acute: 0xb4,
        micro: 0xb5,
        pilcrow: 0xb6,
        middot: 0xb7,

        cedilla: 0xb8,
        super1: 0xb9,
        ordinalMan: 0xba,
        quarter: 0xbc,
        half: 0xbd,
        quarter3: 0xbe,
        queryInv: 0xbf
    }

    constructor(readonly num: number) {

    }
}
