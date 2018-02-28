# Reminiscent

```ts
@singl class Memory {
    static readonly memory: unique symbol =
        Symbol("{stm memory}")
}

interface MemoryMd<A> {
    [Memory.memory]: A    
}

type Reminisc<A> = $<[MemoryMd<A>, A]>
```
