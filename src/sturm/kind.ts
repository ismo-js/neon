export type Father<Elem> = new(
    state? :State<Elem>,
)=> KindLike<Elem>

export type KindLike<Elem> =
    Kind<Elem> | Iterator<Elem>
export type KindProd<Elem> =
    Father<Elem> | KindLike<Elem>

export interface Kind<Elem> {
    [key :number]: Elem[]
}
