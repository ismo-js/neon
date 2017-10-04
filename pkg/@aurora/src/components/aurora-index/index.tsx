import {
    Component,
    Prop,
} from "@stencil/core"

import {
    Int
} from "neon-lowbar"

@Component({
    tag: "aurora-index",
    styleUrl: "index.css",
})
export class Index {
    render() {
        return [
            <k-action sign="arrow">
                Welcome to ısmo!
            </k-action>,
        ]
    }
}
