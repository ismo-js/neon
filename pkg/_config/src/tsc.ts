const compPaths = {
    baseUrl: new Path("src/"),
    typeRoots: [
        new Path("/node_modules/@types"),
    ],
    outDir: new Path("lib/"),
}

const compTgt = {
    module: "commonjs",
    target: "es2017",
    lib: [
        "es2017",
    ],
}

const compStrong = {
    strict: true,
    noFallthroughCasesInSwitch: true,
    forceConsistentCasingInFileNames: true,
}

const compDecor = {
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
}

const compLog = {
    listEmittedFiles: true,
    listFiles: true,
    diagnostics: true,
}

const selector = {
    exclude: [
        "node_modules",
        "***/*.old",
        "***/*.pre",
    ]
}

export default {
    compileOnSave: true,
    compilerOptions: {
        ...compPaths,
        ...compTgt,
        ...compStrong,
        ...compDecor,
        ...compLog,
    },
    ...selector,
}
