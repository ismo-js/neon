const rc :Object = {
    presets: [
        ["@babel/env", {
            node: "current",
        }],
        //["@babel/typescript"],
        ["@babel/stage-1"],
    ],
    plugins: [
        ["@babel/syntax-typescript"],
        ["transform-typescript-declare"],
    ],
}
export default rc
