import {
    Component as Com,
    Prop,
} from "@stencil/core"

import {
    Int
} from "neon-lowbar"

@Com({
    tag: "k-action",
    styleUrl: "action.css",
})
export class KAction {
    @Prop() sign :string

    protected signPoints :{[key :string] :Int[]} = {
        arrow: [0x2192 as Int],
    }

    protected getSignChars(signName :string) :string {
        return String.fromCodePoint(...this.signPoints[signName])
    }

    render() {
        const signName = this.sign in this.signPoints
            ? this.sign
            : "arrow"

        return [
            <img class="sign"
                src={"var/sign/" + signName}
                alt="${this.getSignChars(signName)}" />,

            <div class="desc">
                <slot name="desc" />
            </div>
        ]
    }
}
