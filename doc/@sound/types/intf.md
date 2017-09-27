Interface
===

```ts
@intf class Cat {
    @desc.enum(true)
    @ty`${Prim.string}`
    name

    @ty`[…${Person}]`
    owners
}
```
