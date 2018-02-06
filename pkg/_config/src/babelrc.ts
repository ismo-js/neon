declare const TYPE :unique symbol
const PRES :typeof TYPE = Symbol()
const PLUG :typeof TYPE = Symbol()

function bab(
    stamps :TemplateStringsArray,
    ...vals :any[],
) :string {
    const [type, stage] = vals as [typeof TYPE, number]
    const typeArr :string[] = [] /*
        PRES === type
            ? "preset"
            : PLUG === type
            ? "plugin"
            : ""
    ]*/

    let pre = "@babel/"
    let post = ""

    if ("number" === typeof stage) {
        return pre + typeArr.concat(["stage", String(stage)]).join("-") + post
    }

    return pre + typeArr.concat(stamps.filter(s=> s.length)).join("-") + post
}

const rc :{
    comments? :boolean,
    presets? :any[][],
    plugins? :any[][],
    highlightCode :boolean,
} = {
    presets: [
        [bab`${PRES}env`],
        //[bab`typescript`],
        [bab`${PRES}${1}`],
    ],
    plugins: [
        [bab`${PLUG}syntax-typescript`],
    ],
    highlightCode: true,
}
export default rc
