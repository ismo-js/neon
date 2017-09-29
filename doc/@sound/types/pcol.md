![neon^](https://placehold.it/120/c2ff23/ff23c2?text=neon^)

Protocols
===

```ts
@pcol class Ownable {
    name = { // restrictor #1
        key: String,
        //…"name" will be a plain property name like in `instance.name` 
        enumerable: true,
        writable: undefined,
        ...ty`${Prim.string}`(),
    }

    owners = { // restrictor #2
        ...ty`[…${Person}]`(),
    }
}
```


## Default Restrictor

```ts
{
    key: Symbol,
    enumerable: undefined,
    writable
}
```
