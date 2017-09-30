![neon^](https://placehold.it/120/c2ff23/ff23c2?text=neon^)

Typing Decorator
===

## ~~[Ħ]~~ Template Language
### Operators
#### `[]`–Array Typings

### Function Type
##### Meta-typed:
```js
class {
    @ty`
    (
        subjectStr :: string,
        index :: number,
    )=> indexedChar :: string
    `
    static getCharAt(str, i) {
        return str.charAt(i)
    }
}
```

##### Inline-typed:
```js
class {
    @ty`
    (…*)=> indexedChar :: string
    `
    static getCharAt(
        @ty`string` subjectStr,
        @ty`number` index,
    ) {
        return subjectStr.charAt(index)
    }
}
```
