# Indexed

```ts
@singl class Index {
    static readonly index: unique symbol =
        Symbol("{stm memory}")
}

interface IndexMd<I> {
    [Index.index]: I
}

type Indexed<A, I> = $<[IndexMd<I>, A]>
```
