# Mortal

```ts
@singl class Fettle {
    static readonly UNBRED: unique symbol =
        Symbol("{stm fettle—unbred}")
    static readonly AWAKE: unique symbol =
        Symbol("{stm fettle—awake}")
    static readonly SLEEPING: unique symbol =
        Symbol("{stm fettle—sleeping}")
    static readonly DEAD: unique symbol =
        Symbol("{stm fettle—dead}")

    static readonly fettle: unqiue symbol =
        Symbol("stm fettle :=")
}

namespace Fettle {
    type Unawake = typeof Fettle.UNBRED
        | typeof Fettle.SLEEPING
        | typeof Fettle.DEAD
    
    type Value = typeof Fettle.AWAKE
        | Fettle.Unawake
}

interface UnawakeMd {
    [Fettle.fettle]: Fettle.Unawake
}

interface AwakeMd {
    [Fettle.fettle]: typeof Fettle.AWAKE
}

type Mortal<A> = $<[UnawakeMd] | [AwakeMd, A]>
```
