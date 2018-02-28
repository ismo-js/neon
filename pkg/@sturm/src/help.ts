import {
    O,
} from "@ismo/lowbar"

function inProto<Tgt>(
    tgt :Tgt,
    prop :string,
): prop is keyof Tgt {
    const proto = O.getPrototypeOf(tgt)
    return prop in proto
}
