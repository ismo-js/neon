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
