import {
    Component,
    Prop,
} from "@stencil/core"

import {
    Int
} from "neon-lowbar"

@Component({
    tag: "aurora-index",
    styleUrl: "index.sass",
})
export class Index {
    render() {
        return [
            <header>
            </header>,

            <stencil-router>
                <stencil-route url="/" exact={true} component="aurora-xmp" />
                <stencil-route url="/doc" component="aurora-doc" />
                <stencil-route url="/xmp" component="aurora-xmp" />
            </stencil-router>
        ]
    }
}
