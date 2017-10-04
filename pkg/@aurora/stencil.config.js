exports.config = {
    bundles: [
        {
            components: [
                "k-action",
            ],
            components: [
                "aurora-index",
                "aurora-navbar",
                "aurora-doc",
                "aurora-xmp",
            ],
        },
    ],
    collections: [
        {name: "@stencil/router"}
    ],
    publicPath: "/",
    buildDir: "dest/",
}
