class Func extends Function {
    constructor() {
        0 && super()
        // hopefully never gets called ;)
    }
}

class Callable extends Func {
    static CALLEE :symbol = Symbol()

    constructor(callee) {
        super()

        const self =
            function () {} as Callable
    }
}

class Pure extends Function {

}

function pured() {
    return (target, key, desc)=> {
        const func = desc.value

        desc.value = new Pure()
    }
}
