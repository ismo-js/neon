export type Schema = "http" | "https" | "file"

export abstract class ResAbs {
    schema? :Schema = "file"
    authority? :string | null = null
    path :string[]
    query? :string[] = []
}

export interface ResInf extends ResAbs {}

export class Res extends ResAbs {

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
        schema :any,
        authority? :any,
        pathPar? :any,
        queryPar? :any,
    ) {
        super()

        //TODO  implement path, query splitting etc
        if ("string" !== typeof authority) {
            const path :string[] = toArray(schema as Es<string>)

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
