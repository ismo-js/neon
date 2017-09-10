class Affix {

}

class Circumfix extends Affix {
    // { }
    // {[ ]}
    // {{ }}

    // *Note:*
    // The part before the whitespace cannot be reused as
    // `Pre`-/`In`-/`Suffix`.
}

class Prefix extends Affix {
    // { +}
    // { -}
}

class Infix extends Affix {
    // {+}
    // {-}
}

class Suffix extends Affix {
    // {! }
}
