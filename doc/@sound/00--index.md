![#ffff23](https://placehold.it/120/c2ff23/ff23c2?text=neon^)

# sounᴅ
## `neon-sound`
### Runtime-typed *EcmaScript*

>   **(→)** bringing types to *EcmaScript*
---

## ~~ Providing

+ ``` @ty`` ```
+ ` @intf `

… et cetera

## ~~ Project

(… written in *TypeScript*)

>   [*`(→)`* `^neon` Project Overview](../index.md)


## ~~ State

—*Not active*—

Not too much done yet; currenctly not runnable


## ~~ Introduction

*TypeScript* extends *EcmaScript* syntactically
 — by type definitions as well as future *ES* inspired sugar —
plus semantically
 — what can be seen in the emitted `*.d.ts`es.
*sounᴅ* plans to form a contrast …

##### *`(+)`* By:
+ Enabeling **run- *and* compile[*](#facit1)-time type** respectively descriptor **checking**

##### *`(-)`* Without:
- Extending the language **syntactic**ally
<br/>At compile-time, no changes were made to the sources[*](#facit1)

##### *`(=)`* Summing to:
* <span id="facit1">‹`*`›:</span>
The «compiler» is just a validating *Babel* plug-in, which uses the statically available information to perform type checks.

## ~~ Featueres

* Types
    + [Interface types](./decorator-typing-concepts/types/inter.md)
    + [Class types](./decorator-typing-concepts/types/class.md)
    + [Dynamic types](./decorator-typing-concepts/types/dynam.md)

---

##### *`(_)`* Footer:
<br/>
*<span id="foot1">‹`¹`›</span>*
>   Maybe — at a later point in time,
>   there will be a feature providing strong dynamical typing for `let`/`const` variables.
>
>   As I do not see proposals for things like *variable decorators* and *variable read/write hooks* on their ways,
>   therefore a policy change could occur.
