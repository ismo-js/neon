import Chars from "chars"
import Mom from "op"

interface Reduc {
    pending :number[]
}

export default class Union extends Mom {
    static readonly matchers :number[][]
        = [
            [Chars.ampersand]
        ]

    constructor(
        readonly template :number[],
    ) {
        super()
    }

    get ast() {
        this.template.reduce(
            (
                {
                    pending: pendingParam,
                    matches,
                } :Reduc,
                r :number,
            ) :Reduc => {
                const pending = pendingParam.concat([r])

                if (this.matchers.some(matcher=> eq(pending, matcher)))
                    return {
                        pending: [],
                        matches: matches.concat(pending),
                    }

                return {
                    pending,
                }
            },
            {
                pending: [],

            },
        )

        return undefined //TODO
    }
}
