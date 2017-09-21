import {
    Lvl,
    mag,
    Out,
} from "ast/ast"
import Mom from "ast/complxy/stmt/choice"

namespace JSX {
    export interface Element {}

    export function tag(
        Elem :new(attrs: Object)=> JSX.Element,
        attrs :Object | null,
        ...children :(string | JSX.Element)[]
    ) :JSX.Element {
        return new Elem(attrs || {})
    }
}

const Pre = Mom.Mag; type Pre = Mom.Mag

class If extends Mom {
    @mag(0x7e57)
    test: Expr

    @mag(0xc025)
    cons: Stmt

    @mag(0xa17e)
    alt: Stmt | null

    output() {
        return <Out>
            if ({this.test}) {cons}
            {(this.alt)
                ? <Out>else {this.alt}</Out>
                : void 0
            }
        </Out>
    }
}
namespace If {
    export enum Mag {
        bits = 0x1f,
        //…   *if*
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default If
