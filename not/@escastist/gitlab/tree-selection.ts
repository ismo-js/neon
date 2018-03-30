declare const git :any

declare const WILD_SHAL :unique symbol
declare const WILD_DEEP :unique symbol

export async function main(
) {
    const gitU = git.privateToken("012abc...XYZ")
    const groupProjSel = [
        {
            path: ["top-group", WILD_DEEP],
        },
    ]
    const groupProjs = gitU.get(groupProjSel)
}

