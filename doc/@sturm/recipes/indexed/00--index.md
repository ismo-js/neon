# Indexed

```ts
@singl class Index {
    static readonly index: unique symbol =
        Symbol("{stm index}")
}

interface IndexMd<I extends Iterable> {
    [Index.index]: I
}

type Indexed<A, I extends Iterable> = $<[IndexMd<I>, A]>
```
