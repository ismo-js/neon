import Chars from "chars"
import {
    Ent,
    Reduc,
    arrEq,
    default as Mom,
} from "op"

export default class Union extends Mom {
    static readonly matchers :Ent[][] =
        [[Chars.ampersand]]

    static reduc(
        {
            pending: pendingParam,
            matches,
        } :Reduc,
        r :Ent,
    ) :Reduc {
        const pending = pendingParam.concat([r])

        if (Union.matchers.some(e=> arrEq(pending, e)))
            return {
                pending: [],
                matches: matches.concat(pending),
            }

        return {
            pending,
            matches,
        }
    }

    constructor(
        readonly template :Ent[],
    ) {
        super()
    }

    get ast() {
        // reduction finish:
        const reducFin = this.template.reduce(Union.reduc, {
            pending: [],
            matches: [],
        })

        return undefined //TODO
    }
}
