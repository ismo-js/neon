type Ob = Object
type Label = symbol

abstract class Block {
    static readonly BLOCK :symbol =
        Symbol()

    abstract block<
          Res extends Prim>(
        label :Label,
        expr :Expr,
    ) :Expr<Ins, E>

    abstract loop<
          Res extends Prim>(
        label :Label,
        expr :Expr,
    ) :Expr<X>

    abstract ifElse<
          Res extends Prim>(
        label :Label,
        then :Expr,
        besides :Expr,
    )
}
