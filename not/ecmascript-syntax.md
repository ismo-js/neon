# EcmaScript Syntax

## Literal

####= Kinds
- `RegExp`
- `Key` (boolean / null)
- `String`
- `Numeric`


####= Effects
##### @Key `SWITCH [integer]`
---
##### @Numeric `ADD [number]`
##### @Numeric `SHIFT [integer]`
##### @Numeric `REBASE [0 | 1 | 3 | 4]`
- `0`: Decimal
- `1`: Binary
- `3`: Octal
- `4`: Hexadecimal

####= Sections
##### *Prefix*:
+ Type:
    - `char`
+ Kind:
    - Numeric *(base num)*

##### *Value*:
+ Type:
    - `boolean | null` *(for `Key`)*
    - `char[]` *(for `RegeExp | String`)*

##### *Suffix*:
+ Type:
    - `char[]`
+ Kind:
    - RegExp
    - Numeric *(for "real integer" support)*