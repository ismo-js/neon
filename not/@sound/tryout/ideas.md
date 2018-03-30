# Functional Operators
`|>`, `<|` for curried application

```js
fn <| arg
arg |> fn
fn |> uncurriedArg1, uncurriedArg2 |> curriedArg
```

# Literal Semantics
If functions can handle raw literals, there semantics should be conserved:

```js
new BigInteger(1234567890987654321)
```

# Argument Matching

```js
0 => "nil" <> 1 => "one" <> a => String(a)
```

# Algebraic Operators

```js
["a"] + ["b"] == ["a", "b"]
2 * "z" == "zz"
```
