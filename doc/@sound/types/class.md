![neon^](https://placehold.it/120/c2ff23/ff23c2?text=neon^)

Class
===

>   **NOTE:**
>
>   In `@ty`'s template language,
>   there's a difference between `->`- & `=>`-notated function types
>   (also including classes):
>   `->`-notated functions must be called using `new`,
>   `=>`-notated ones called without `new`.

##### Meta-typed:
```js
@ty`
()-> {
    catSound :: […${Person}],
} & ${Ownable}
`
class Cat {
    catSound = "Meooow!!11"

    @desc({enumerable: true})
    name = "Kitty"
    [Ownable.owners] = []
}
```

##### Inline-typed:
```js
@ty` ()-> ${Ownable} `
class Cat {
    @ty` […${Person}] `
    catSound = "Meooow!!11"

    @desc({enumerable: true})
    name = "Kitty"
    [Ownable.owners] = []
}
```
