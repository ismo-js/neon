/// <reference path="index.ts" />

type Es<E> = E | E[]

function toArray<E>(
    arg: E | E[]
): E[] {
    const arr = arg instanceof Array
        ? arg
        : [arg]

    return null === arr[0]
        ? []
        : arr
}
