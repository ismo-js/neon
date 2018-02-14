type O = Object

export interface PatchableI<Subj extends O> {
    [Patchable.patch] :(
        set :PatchSet<Subj>
    )=> Subj
}

export interface PatchSet<Subj extends O> {
    [Prop in keyof Subj] :Subj
}
