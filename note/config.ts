type JsonVal =
    number | string | boolean | Object | null | undefined

interface Jsonable {
    toJson() :JsonVal
    toJson(
        tgt :Object,
        prop? :string,
    ): JsonVal
}

class Path implements Jsonable {
    readonly isAbs :boolean
    base :string

    constructor(
        valParam :(string | null) | (string | null)[],
    ) {
        const val = "string" === typeof valParam
            ? valParam.split("/")
            : valParam || [null]

        this.isAbs = !val[0]
            ? (val.shift(), true)
            : false
    }

    toJson(
        tgt? :Object | undefined,
        prop? :string | undefined,
    ): JsonVal {
    }
}

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
