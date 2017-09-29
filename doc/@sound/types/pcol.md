![neon^](https://placehold.it/120/c2ff23/ff23c2?text=neon^)

Protocols (Interfaces)
===

## Example

```ts
@pcol class Ownable extends Positionable {
    @restrict({ // restrictor #1
        keyType: Prim.string,
        //…"name" will be a plain property name like in `instance.name`
        writable: undefined,
        enumerable: true,
        ...ty`${Prim.string}`(),
    })
    name

    @restrict({ // restrictor #2
        ...ty`[…${Person}]`(),
    })
    owners
}
```

### Pseudo-Future EcmaScript Snippet
```ts
interface Ownable extends Positionable {
    @{
        keyType: String.prim,
        writable: undefined,
        enumerable: true,
    }
}
```


# Restrictors
## Default Restrictor

```ts
{
    keyType: Prim.symbol,
    writable: undefined,
    configurable: undefined,
    enumerable: undefined,
}
```
