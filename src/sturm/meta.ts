import {
    Father,
} from "./kind"

import {
    default as Stm,
} from "./stm"

export default class Meta {
    static kind<Elem>() {
        return function <
              Target extends Father<Elem>>(
            tgt :Target,
        ) {
            return new Stm<Elem>()
        }
    }
}
