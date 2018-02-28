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
                <svg id="header-logo">
                    <use href="assets/icon/ismo-logo.svg#fonting" />
                </svg>

                <aurora-navbar />
            </header>,

            <stencil-router>
                <stencil-route url="/" group="main" exact={true} component="aurora-xmp" />
                <stencil-route url="/doc" group="main" component="aurora-doc" />
                <stencil-route url="/xmp" group="main" component="aurora-xmp" />
                <stencil-route url="/" group="main" component="aurora-doc" />
            </stencil-router>,
        ]
    }
}
