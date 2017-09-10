const _ = self=> (
    target,
    key,
    descr,
)=> {
    const meta = target[META][key]
    meta[meta.length] = self
}

const Desc = A=> class {
}

class Interface {
    @is(Elem) target
    @is(String, Symbol) key
    @is(Desc(Elem)) desc
}

class Ref extends Elem {
    @attr @is(Res) href = new Res("https://www.google.com/")
}

class A extends Ref {
    @is(Key) target = new Key("_blank")
}
