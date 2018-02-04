function bp(
    stamps :string[],
    ...vals :number,
) :string {
    let pre = "@babel/"
    let post = ""


    if (Number.isSafeInteger(vals[0])) {
        return pre + "stage-" + stage // !
    }

    return pre + preset.concat(stamps).join("-") + post
}

export const presets :string[][] = [
    [bp`env`],
    [bp`typescript`],
    [bp`${1}`],
]
