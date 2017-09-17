export const enum Lvl {
    // Complexity:
    Complxy = 1,
    Type = 4,
}

export declare const enum Magic {
    bits,
    lvl,
    byte,
}

export abstract class Val {
}

/* ~′~′~ | ~′~′~ */
class Bool extends Prim {
    readonly static mag = [
        Lvl.X4,
        Prim.mag[1] ^ 0x1b01 << Lvl.X1,
    ]
}

class Num extends Prim {
    readonly static mag = [
        Lvl.X4,
        Prim.mag[1] ^ 0x1123 << Lvl.X1,
    ]
}

class Sym extends Prim {
    readonly static mag = [0x1555,
    Str = 0x1abc,
}
