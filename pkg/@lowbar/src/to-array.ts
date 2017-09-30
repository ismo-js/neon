export type Es<E> = E | E[]

export function toArray<E>(
    arg: E | E[]
): E[] {
    const arr = arg instanceof Array
        ? arg
        : [arg]

    return null === arr[0]
        ? []
        : arr
}

// array 1-level equality:
export function arrEq<E>(
    l :E[],
    r :E[],
) :boolean {
    return l.length === r.length
          && l.every((e, i)=> l[i] === e)
}
