import {Chars, Char} from "./char"

export default const latin :Chars = {
    null: new Nothing(0x00),
    //control,
    tab: new White(0x09, {
        length: 4,
    }),
    feed: new Line(0x0a),
    return: new Line(0x0d, {
        trim: true,
    }),

    space: new White(0x20),
    bang: new Punc(0x21),
    quote: new Punc(0x22),
    hash: new Sign(0x23),

    dollar: new Letter(0x24), //!
    percent: new Sign(0x25),
    ampersand: new Sign(0x26),
    apostrophe: new Punc(0x27),

    parens: new Punc([
        {l: 0x28},
        {l: 0x29},
    ]),
    asterisk: new Sign(0x2a),
    plus: new Sign(0x2b),

    comma: new Punc(0x2c),
    minus: new Sign(0x2d),
    dot: new Punc(0x2e),
    slash: new Sign(0x2f),

    digits: new Num({
        l: 0x30,
        r: 0x39,
    }),
    colon: new Punc(0x3a),
    semicolon: new Punc(0x3b),

    angle: new Punc([
        {l: 0x3c},
        {l: 0x3e},
    ]),
    equal: new Punc(0x3d),
    query: new Punc(0x3f),

    at: new Sign(0x40),
    alphabetUp: new Letter({
        l: 0x41,
        r: 0x5a,
    }),
    bracket: new Punc([
        {l: 0x5b},
        {l: 0x5d}, //!>
    ]),
    backslash: new Sign(0x5c), //!<
    circumflex: new Punc(0x5e),
    lowBar: new Letter(0x5f),

    grave: new Punc(0x60),
    alphabetLow: new Letter({
        l: 0x61,
        r: 0x7a,
    }),
    brace: new Punc([
        {l: 0x7b},
        {l: 0x7d}, //!
    ]),
    vertBar: new Punc(0x7c),
    tilde: new Punc(0x7e),
    //control: delete,
}
