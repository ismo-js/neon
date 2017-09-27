sound (*`neon-sound`*)
===
…providing ```(@ty``)```, `(@intf)` et cetera

***Runtime-typed EcmaScript***

## Project Information
### Author:
- Jakob Schnell @probitlabs
    * :e-mail: <jakob.schnell@univie.ac.at>

### License:
- LGPL-3.0

### State:
*Build-up phase:* not too much done yet; not runnable :(


## Featueres

- Types
    + Interface types
    + Class types
    + Dynamic types

### Interface

```js
@intf class Cat {
    @ty`${Prim.string}` name
    @ty`${Person}[]` owner
}
```
