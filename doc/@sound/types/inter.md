![neon^](https://placehold.it/120/c2ff23/ff23c2?text=neon^)

Interfaces
===
*(Trait Protocols)*

## Example
```ts
@inter class Ownable extends Positionable {
    @restrict({ // restrictor
        symbolical: false,
        //…"name" will be a plain property name like in `instance.name`
        writable: undefined,
        //…`undefined` is default (an unnecessary line) [1]
        enumerable: true,
        ...ty`${Prim.string}`(),
    })
    name

    @restrict({
        ...ty`[…${Person}]`(),
    })
    owners
}
```

### Pseudo-Future EcmaScript Snippet
```ts
interface Ownable extends Positionable {
    @{
        writable: undefined,
        enumerable: true,
    }
    public name :String.Prim

    owners :[…Person]
}
```

Despite the share in goal and mind as well as the syntactical overlap with *TypeScript* interfaces, those are not semantically related.


# Restrictors

```ts
const Restriction = Boolean.Prim | undefined

interface Restrictor {
    symbolical :Boolean.Prim =
        true
    writable :Restriction =
        undefined
    configurable :Restriction =
        undefined
    enumerable :Restriction =
        undefined
}
```

---

##### *`(_)`* Footer:
<br/>
*<span id="foot1">‹`¹`›</span>*
>   But setting `writable` to `undefined` shows the possability of explictly not restricting a descriptor field.
