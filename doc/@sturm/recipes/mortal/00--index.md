# Mortal

```ts
class Fettle {
    SLEEPING: unique symbol =
        Symbol("{stream fettle—sleeping}")
    DEAD: unique symbol =
        Symbol("{stream fettle—dead}")
    UNBRED: unique symbol =
        Symbol("{stream fettle—unbred}")
}

type Mortal<A> = $<[Fettle, A]>
```
