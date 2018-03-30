# <small>(Kind:)</small> \#i Literal
---

### == Kinds
- `Regexp`
- `Unique` (boolean / null / undefined)
- `String`
- `Numeric`
---
- `Array`
- `Object`
- `Template`


### == Sections
##### *Prefix*:
+ Type:
    - `char`
+ Kind:
    - Numeric *(base num)*

##### *Value*:
+ Type:
    - `boolean | null` *(for `Key`)*
    - `char[]` *(for `Regexp | String`)*

##### *Suffix*:
+ Type:
    - `char[]`
+ Kind:
    - RegExp
    - Numeric *(for "real integer" support)*
