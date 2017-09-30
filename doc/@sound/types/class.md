![neon^](https://placehold.it/120/c2ff23/ff23c2?text=neon^)

Class
===

>   **NOTE:**
>
>   In `@ty`'s template language, there's a difference between `->` & `=>`. `->`-typed functions must be called using `new`, `=>`-typed ones called without `new`.

```js
@ty`
()-> {
    name :: string,
    owners :: […${Person}],
}
`
class Cat {
    @desc({enumerable: true})
    // inline-typing: @ty`${Prim.string}`
    name = "Kitty"

    // inline-typing: @ty`[…${Person}]`
    owners = []
}
```
