import {
    Lvl,
} from "ast/ast"
import Handler from "ast/type/stmt/ctrl/handler"
import Block from "ast/type/stmt/pod/block"
import Mom from "ast/complxy/stmt/ctrl"

const Pre = Mom.Mag; type Pre = Mom.Mag

class Try extends Mom {
    @mag(0xa77e)
    @typ(Block)
    attempt: Block

    @mag(0x4ad1)
    @typ(Nullable, Handler)
    handler: Handler | null

    @mag(0xf12a)
    @typ(Nullable, Block)
    finalizer: Block | null

    get output() {
        return <Stmt>
            <Word>try</Word>
            <Brace>{this.attempt}</Brace>
            {this.handler}
        </Stmt>
    }
}
namespace Try {
    export enum Mag {
        bits = 0x74,
        //…   *t*r*y*
        lvl = ~~Lvl.Type,
        word = Pre.bits ^ bits << Pre.lvl,
    }
}
export default Try
