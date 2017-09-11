export interface Context {
    locName :string,
    path :Path,
}

export type JsonVal =
    number | string | boolean | Object | null | undefined

export default interface Jsonable {
    toJson(
        context :Context,
    ) :JsonVal
    toJson(
        context :Context,
        tgt :Object,
        prop :string,
    ) :JsonVal
}
