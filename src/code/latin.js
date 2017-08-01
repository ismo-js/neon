export default {
    //control,
    space: new White(0x20),
    bang: new Punc({
        l: 0xa1,
        r: 0x21,
    }),
    quote: new Punc({
        l: 0xbf,
        r: 0x22,
    }),
    hash: new Sign(0x23),

    dollar: new Letter(0x24), //!
    percent: new Sign(0x25),
    ampersand: new Sign(0x26),
    apostrophe: new Sign(0x27),

    parens: new Punc({
        l: 0x28,
        r: 0x29,
    }),
    asterisk: new Sign(0x2a),
    plus: new Sign(0x2b),

    comma: new Sign(0x2c),
    minus: new Sign(0x2d),
    dot: new Sign(0x2e),
    slash: new Sign(0x2f),

    digits: new Num(0x30, 0x39),
    colon: new Sign(0x3a),
    semicolon: new Sign(0x3b),

    angle: new Punc({
        l: 0x3c,
        r: 0x3e,
    }),
    equal: new Sign(0x3d),
    query: 0x3f,

    at: 0x40,
    alphabetUp: new Letter(0x41, 0x5a),
    bracket: new Punc({
        l: 0x5b,
        r: 0x5d, //!>
    }),
    backslash: new Sign(0x5c), //!<
    circumflex: new Sign(0x5e),
    lowBar: new Letter(0x5f),

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
