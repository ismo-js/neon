import {
    Father,
} from "./kind"

import {
    default as Stm,
} from "./stm"

export default class Meta {
    static [Symbol.toPrimitive](
        hint :"number" | "string" | "default"
    ) {
        switch (hint) {
            case "number":
                throw "Unable to cast `Meta` to `number`."
            case "string":
            case "default":
                return "$"
                //… in order to be able to write [time +$+ offset]
        }
    }

    // Decorate kinds:
    static kind<Elem>() {
        return function <
              Target extends Father<Elem>>(
            tgt :Target,
        ) {
            return new Stm<Elem>()
        }
    }
}
