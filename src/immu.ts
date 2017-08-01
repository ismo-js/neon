export const PROTO = Symbol(doc`
    recursively get all prototypes of
`)
export const REFLEX = Symbol(doc`
    get reflexion meta object of
`)

@doc`
    callable object
`
export class Callable extends Function {
    constructor() {
        function callable(args) {
            return this[CALL](...args)
        }

        Reflect.setPrototypeOf(
            callable,
            Callable.prototype
        ) || err("Prototype error")

        return callable
    }
}

export class Reflexion extends Callable {

}

export class Immu extends Callable {
    get [REFLEX](): string {
        return "hallo"
    }
}
