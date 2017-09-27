import {HAS, DynamTy} from "ty"

export interface PrimTys {
    undefined :undefined
    ["null"] :null
    symbol :symbol
    boolean :boolean
    number :number
    string :string
}

export function test<TyStr extends string>(
    tyStr :TyStr,
) :DynamTy {
    return {
        [HAS](test :any) :test is PrimTys[TyStr] {
            return tyStr === typeof test
        }
    }
}

export default {
    undefined: test("number"),
    null: test("null"),
    symbol: test("symbol"),
    boolean: test("boolean"),
    number: test("number"),
    string: test("string"),
}
