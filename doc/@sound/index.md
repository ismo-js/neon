sounᴅ (*`neon-sound`*)
===
***Runtime-typed EcmaScript***

## Providing
+ ``` @ty`` ```
+ ` @intf `

… et cetera

## Project
+ *Author:*
<br/>Jakob Schnell @probitlabs
    * :e-mail: <jakob.schnell@univie.ac.at>
+ *License:*
<br/>**LGPL-3.0**


## State
*Build-up phase:* not too much done yet; not runnable `:(`


## Introduction
*TypeScript* extends *EcmaScript* syntactically
 — by type definitions as well as future *ES* inspired sugar —
plus semantically
 — what can be seen in the emitted `*.d.ts`es.
*sounᴅ* plans to form a contrast …

##### *`(+)`* By:
+ Enabeling **run- *and* compile[¹](#facit1)-time typechecking**

##### *`(-)`* Without:
- Extending the language **syntactic**ally
<br/>At compile-time, no changes were made to the source[*](#facit1)

##### *`(=)`* Summing to:
* <span id="facit1">‹`*`›:</span>
The «compiler» is just a validating *Babel* plug-in, which uses the statically available information to perform type checks.

## Featueres

* Types
    + [Interface types](./types/intf.md)
    + [Class types](./types/class.md)
    + [Dynamic types](./types/dynam.md)

---

##### Footer:

- <span id="foot1">‹`¹`›:</span>
Maybe — at a later point in time, there will be a feature providing `let`/`const` typings. I don't see proposals for things like *variable decorators* and *variable read/write hooks*

<style>
h2::before {
    content: "Ħ"; font-family: monospace;
    padding: 0 1ex; margin-right:.5ex;
    opacity:.5; background-color:rgba(128,128,128,0.5);
}
small, h5 {
    font-variant-caps:small-caps;
}
</style>
