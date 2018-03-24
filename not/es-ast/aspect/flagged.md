# Flagged

An entity that can be associated with one or multiple flags. That flag set is keyed by integers representing *Uni*code points of letter tags; and is optionally filled with an integer to each key or otherwise the key respresents a Boolean flag.

### == Known Flag Tags
+ \#`n`: Arbitrary precision i**n**teger
    <∷> `Boolean`
    <$> used for:
    - `Numeric`

+ \#`e`: **E**xponent
    <∷> `Integer`
    <$> used for:
    - decimal (!) `Numeric`

+ \#`.`: Fractional Part (after **`.`**)
    <∷> `Integer`
    <$> used for:
    - decimal (!) `Numeric`

---

+ \#`g`: **G**lobal match
    <∷> `Boolean`
    <$> used for:
    - `Regexp`

+ \#`i`: Case **i**gnoration
    <∷> `Boolean`
    <$> used for:
    - `Regexp`

+ \#`m`: **M**ultiline mode
    <∷> `Boolean`
    <$> used for:
    - `Regexp`

+ \#`u`: ***U**ni*code point sequence
    <∷> `Boolean`
    <$> used for:
    - `Regexp`

+ \#`y`: **S**ticky match at last index
    <∷> `Boolean`
    <$> used for:
    - `Regexp`


### == Attributes


### == Effects
##### \<SET>
`[integer]? <Flagged.SET> [flag-tag]`

##### \<UNSET>
`<Flagged.SET> [flag-tag]`