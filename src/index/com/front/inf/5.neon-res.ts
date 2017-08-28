/// <reference path="0.ts" />

export class NeonRes {
    toChunk$(
        path :string,
    ): $<string> {
        type SmOpt = Object
              //TODO find a better way to use types with node.
        const readOpt: SmOpt = {
            encoding: "utf8",
        }

        return $.("data", fs.createReadStream(path, readOpt))
    }
}
