function bp(
    stamps :TemplateStringsArray,
    ...vals :number[],
) :string {
    const modSet = ["preset"]

    let pre = "@babel/"
    let post = ""

    if ("number" === typeof vals[0]) {
        const [stage] = vals
        return pre + modSet.concat(["stage", String(stage)]).join("-") + post
    }

    return pre + modSet.concat(stamps).join("-") + post
}

const rc :{
    comments? :boolean,
    presets? :string[][],
    plugins? :string[][],
} = {
    presets: [
        [bp`env`],
        [bp`typescript`],
        [bp`${1}`],
    ],
}
export default rc
