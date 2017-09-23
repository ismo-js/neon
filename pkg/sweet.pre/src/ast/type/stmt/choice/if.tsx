/// <reference path="../../../../jsx.ts" />
import {
    Lvl,
    mag,
    Out,
} from "ast/ast"
import Mom from "ast/complxy/stmt/choice"

interface Taggable {
    tag(
        attrs :Object,
    ) :Object
}

function tag<ElemCon extends Taggable>(
    elemCon :ElemCon,
    attrs :Object | null,
    ...children :(string | Object)[]
) :JSX.Element {
    return elemCon.tag(attrs || {})
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
        return <Stmt>
            if{" "}
            <Paren>{this.test}</Paren>
            {this.cons}
            {(this.alt)
                ? <Expr>
                    else{" "}
                    {this.alt}
                </Expr>
                : ""
            }
        </Stmt>
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
