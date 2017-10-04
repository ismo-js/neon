exports.config = {
    bundles: [
        {
            components: [
                "k-action",
            ],
            components: [
                "aurora-index",
                "aurora-doc",
            ],
        },
    ],
    collections: [
        {name: "@stencil/router"}
    ],
    publicPath: "/",
    buildDir: "dest/",
}
