import {
    test as avaTest,
    GenericTestContext,
    AnyContext,
} from "ava"

export type T = GenericTestContext<AnyContext>

export function tst(
    test :typeof avaTest,
) {
    return (Cls :new ()=> {})=> {
        const inst = new Cls()

        for (let prop in inst) {
            const val = (inst as any)[prop]

            if ("string" === typeof val) 
                test.todo(`${Cls.name}@${prop}: ${val}`)
            else if ("function" === typeof val)
                test(`${Cls.name}@${prop}${
                    val.desc ? ": " + val.desc : ""
                }`, val)
            else
               throw new TypeError(`{${inst}} is not a testable value…`)
        }
    }
}

export function enm(bool :boolean) {
    return (
        tgt :any,
        prop :string,
        desc: PropertyDescriptor,
    )=> ({...desc, enumerable: bool})
}