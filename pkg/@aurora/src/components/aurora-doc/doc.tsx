import {
    Component,
    Prop,
} from "@stencil/core"

import {
    Int
} from "neon-lowbar"

@Component({
    tag: "aurora-doc",
    styleUrl: "doc.css",
})
export class Doc {
    render() {
        return [
            <k-action sign="arrow">
                Welcome our docs!
            </k-action>,
        ]
    }
}
