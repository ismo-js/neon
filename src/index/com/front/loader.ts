import {Stream as $} from "xstream"
import * as fs from "fs"

type Schema = "http" | "https" | "file"
type Es<E> = E | E[]

const Ob = Object

function toArray<E>(
    arg: E | E[]
): E[] {
    const arr = arg instanceof Array
        ? arg
        : [arg]

    return null === arr[0]
        ? []
        : arr
}

export abstract class Res {
    schema? :Schema = "file"
    authority? :string | null = null
    path :string[]
    query? :string[] = []

    constructor(
        path :Es<string>,
    )
    constructor(
        schema :Schema,
        path :Es<string>,
    )
    constructor(
        schema :Schema,
        authority :string,
        path :Es<string>,
        query? :Es<string>,
    )
    constructor(
        schema,
        authority?,
        pathPar?,
        queryPar?
    ) {
        if ("string" !== typeof authorityPar) {
            const path = toArray(schema)

            this.assign({path})
        } else if ("string" !== typeof pathPar
              && !(pathPar instanceof Array)) {
            const path = toArray(authority)

            this.assign({
                schema,
                path,
            })
        } else {
            const path = toArray(pathPar)
            const query = toArray(queryPar)

            this.assign({
                schema,
                authority,
                path,
                query,
            })
        }
    }

    private assign(propObj :ResInf) {
        Ob.assign(this, propObj)
    }
}

interface ResInf extends Res {}

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
