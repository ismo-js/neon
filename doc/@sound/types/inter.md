![neon^](https://placehold.it/120/c2ff23/ff23c2?text=neon^)

Interfaces
===
*(Trait Protocols)*

### Example
```js
@inter class Ownable extends Positionable {
    @rest({ // restrictor
        symbolical: false,
        writable: undefined,
        //…`undefined` is default (an unnecessary line) [1]
        enumerable: true,
    })
    @ty` string `
    name

    @ty` […${Person}] `
    owners
}
```

##### Pseudo-Future EcmaScript Snippet:
```js
interface Ownable extends Positionable {
    @{
        writable: undefined,
        enumerable: true,
    }
    public name :: String.Prim

    owners :: […Person]
}
```

Despite the share in goal and mind,
respectively the syntactical overlap with *TypeScript* interfaces,
those are not semantically related to that «pseudo-future».


## ~~[Ħ]~~ Restrictors

##### Pseudo-Future EcmaScript Schema:
```js
const Restriction = Boolean.Prim | undefined

interface Restrictor {
    symbolical :: Boolean.Prim =
        true
    //…if false, "name" will be a plain property name like in `instance.name`
    writable :: Restriction =
        undefined
    configurable :: Restriction =
        undefined
    enumerable :: Restriction =
        undefined
}
```

---

##### *`(_)`* Footer:
<br/>
*<span id="foot1">‹`¹`›</span>*
>   But setting `writable` to `undefined` shows the possability of explictly not restricting a descriptor field.
