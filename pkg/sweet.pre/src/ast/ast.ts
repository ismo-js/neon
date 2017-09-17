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
    static Mag :Magic
}

abstract class Void extends Val {
    readonly static mag = [Lvl.X1, 0]
}

abstract class Prim extends Val {
    readonly static mag = [Lvl.X1, 0x1]
}

abstract class Ob extends Val {

}

/* ~′~′~ | ~′~′~ */
class Undef extends Void {
    readonly static mag = [
        Lvl.X4,
        Void.mag[1] ^ 0x101 << Lvl.X1,
    ]
}
namespace Undef {
    const enum Mag {
        bits = 0,
        lvl = Lvl.X4,
    }
}

const Null = !function () {

    return Null
}()

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
