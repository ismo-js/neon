/// <reference path="0.ts" />

export type Schema = "http" | "https" | "file"

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
        //TODO  implement path, query splitting etc
        if ("string" !== typeof authorityPar) {
            const path = toArray(schema) as typeof this.path

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
