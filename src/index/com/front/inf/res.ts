namespace Inf {
    export type Schem = "http" | "https" | "file"

    export class Rs {
        schema? :Schem = "file"
        authority? :string | null = null
        path :string[]
        query? :string[] = []

        constructor(
            path :Es<string>,
        )
        constructor(
            schema :Schem,
            path :Es<string>,
        )
        constructor(
            schema :Schem,
            authority :string,
            path :Es<string>,
            query? :Es<string>,
        )
        constructor(
            schema: any,
            authority?: any,
            pathPar?: any,
            queryPar?: any,
        ) {
            //TODO  implement path, query splitting etc
            if ("string" !== typeof authority) {
                const path = toArray(schema) as Es<string>

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

        private assign(propObj :RsInf) {
            Ob.assign(this, propObj)
        }
    }

    export interface RsInf extends Rs {}
}
