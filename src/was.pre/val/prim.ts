namespace Prim {
    export default class Prim {

    }

    type Size = 64 | 32

    abstract class Num<
          Size>
          extends Prim {
        @pured()
        constructor(readonly size :Size) {
            super()


        }
    }

    export class I
          extends Num<Size> {

    }

    export class F
          extends Num<Size> {
        constructor(size) {
            super(size)


        }
    }
}
