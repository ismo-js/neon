import * as fs from "fs"

import {detect} from "jschardet"
declare function det(
    str :string
) :{
    encoding :string,
    confidence :number,
}

import {
    toArray,
    Es,
    O,
} from "lowbar/meta"


export type Schema = "http" | "https" | "file"

export abstract class ResAbs {
    schema? :Schema = "file"
    authority? :string | null = null
    path :string[]
    query? :string[] = []
}

export interface ResInf extends ResAbs {}

export default class Res extends ResAbs {
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

            this._assign({path})
        } else if ("string" !== typeof pathPar
              && !(pathPar instanceof Array)) {
            const path = toArray(authority)

            this._assign({
                schema,
                path,
            })
        } else {
            const path = toArray(pathPar)
            const query = toArray(queryPar)

            this._assign({
                schema,
                authority,
                path,
                query,
            })
        }
    }

    // TODO   Distribute `obtain` protocol cases over subclasses
    async obtain() {

    }

    async detEncoding() {
        const content = await this.obtain()
    }

    private _assign(propObj :ResInf) {
        O.assign(this, propObj)
    }
}
