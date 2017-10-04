import {
    Component,
    Prop,
} from "@stencil/core"

import {
    Int
} from "neon-lowbar"

@Component({
    tag: "aurora-xmp",
    styleUrl: "xmp.sass",
})
export class Xmp {
    render() {
        return [
            <k-action sign="arrow">
                Welcome our example showcase!
            </k-action>,
        ]
    }
}
