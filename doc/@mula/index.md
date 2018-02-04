# muʟa — A markup language
## Configuring & Building

##### Babel *7*:
The `.babelrc.js` configuration inside the reporoot
links (or at least should link) → `_config/lib/babelrc.js`,
which is the compilee of `_config/src/babelrc.ts`;
so **firstly**, `tsc` is to be executed inside `_config/`.


## Language Characteristics

##### Tags & Elements:
Tags can be introduced by `<` as well as `|`.
…

##### Attributes:
- `!` → `href=`
- `^!` → `itemref=`

- `.` → `class=`
- `^.` → `itemtype=`

- `$` → `slot=`
- `^$` → `itemprop=`
