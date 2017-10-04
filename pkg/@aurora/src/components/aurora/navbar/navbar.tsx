import {
    Component,
    Prop,
} from "@stencil/core"

import {
    Int,
} from "neon-lowbar"

const items = {
    ["/"]: "Home",
    ["/doc"]: "Documentation",
    ["/xmp"]: "Showcases",
}

@Component({
    tag: "aurora-navbar",
    styleUrl: "navbar.sass",
})
export class Navbar {
    render() {
        return [
            <nav>
                {
                    // Stencil fails build when using `lowbar.O` instead of `Object`
                    Object.entries(items).map(([path, name])=>
                        <stencil-route-link url={path}>
                            {name}
                        </stencil-route-link>
                    )
                }
            </nav>,
        ]
    }
}
