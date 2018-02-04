enum Chars {
    space = 0x20,
    bang = 0x21, // "exclamation mark"
    quote = 0x22,
    hash = 0x23, // "number sign"
    // […]
    ampersand = 0x26,
    apostr = 0x27, // also: "single quote"
    parens_G = 0x28,
    parens_D = 0x29,
    asterisk = 0x2a,
    plus = 0x2b,
    comma = 0x2c,
    hyphen = 0x2d, // also: "minus"
    peroid = 0x2e, // "full stop dot"
    // […]
    angle_G = 0x3c,
    equal = 0x3d,
    angle_D = 0x3e,
    colon = 0x3a, // "double dot"
    query = 0x3f, // "question mark"
    at = 0x40,
    // […]
    brack_G = 0x5b, // "square brackets"
    // […]
    brack_D = 0x5d,
    // […]
    brace_G = 0x7b, // "curly braces"
    vBar = 0x7c, // "pipe"
    brace_D = 0x7d,
    tilde = 0x7e,
    // [… … …]
    interpunct = 0xb7, // "middle dot"
    hEllipsis = 0x2026, // "horizontal dots"
    arrow_1 = 0x2192,
    arrow_2 = 0x21d2,
    dot_4 = 0x2237, // "double double dot"
    //…confer: PHP's "paamayim nekudotayim"
}
export default Chars
