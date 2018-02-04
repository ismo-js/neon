function bp(
    stamps :TemplateStringsArray,
    ...vals :number[],
) :string {
    let pre = "@babel/"
    let post = ""

    if ("number" === typeof vals[0]) {
        const [stage] = vals
        return pre + "stage-" + stage // !
    }

    return pre + ["preset"].concat(stamps).join("-") + post
}

export const presets :string[][] = [
    [bp`env`],
    [bp`typescript`],
    [bp`${1}`],
]
