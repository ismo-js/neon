import {
    sym,
} from "@beyond-life/lowbar"

export namespace a {
    const aSyms = sym("<a> statem", "key tag")

    // Declaration:
    export namespace decl {
        export const CONST :unique symbol =
            Symbol(aSyms.CONST.toString())
        export const DELETE :unique symbol =
            Symbol(aSyms.DELETE.toString())
        export const LET :unique symbol =
            Symbol(aSyms.LET.toString())
        export const VAR :unique symbol =
            Symbol(aSyms.VAR.toString())
    }

    // Exception control:
    export namespace exc {
        export const CATCH :unique symbol =
            Symbol(aSyms.CATCH.toString())
        export const FINALLY :unique symbol =
            Symbol(aSyms.FINALLY.toString())
        export const TRY :unique symbol =
            Symbol(aSyms.TRY.toString())
    }
    
    // Branch control:
    export namespace bra {
        export const ELSE :unique symbol =
            Symbol(aSyms.ELSE.toString())
        export const IF :unique symbol =
            Symbol(aSyms.IF.toString())
    }

    // Flow control:
    export namespace flow {
        export const BREAK :unique symbol =
            Symbol(aSyms.BREAK.toString())
        export const CASE :unique symbol =
            Symbol(aSyms.CASE.toString())
        export const CONTINUE :unique symbol =
            Symbol(aSyms.CONTINUE.toString())
        export const DEFAULT :unique symbol =
            Symbol(aSyms.DEFAULT.toString())
        export const DO :unique symbol =
            Symbol(aSyms.DO.toString())
        export const FOR :unique symbol =
            Symbol(aSyms.FOR.toString())
        export const RETURN :unique symbol =
            Symbol(aSyms.RETURN.toString())
    }

    // Meta control:
    export namespace meta {
        export const DEBUGGER :unique symbol =
            Symbol(aSyms.DEBUGGER.toString())
    }
}

export namespace e {
    const eSyms = sym("<e> typing", "key tag")

    // Promise sugar:
    export namespace prom {
        export const AWAIT :unique symbol =
            Symbol(eSyms.AWAIT.toString())
    }

    // Operator:
    export namespace oper {
        export const IN :unique symbol =
            Symbol(eSyms.IN.toString())
        export const INSTANCEOF :unique symbol =
            Symbol(eSyms.INSTANCEOF.toString())
        export const NEW :unique symbol =
            Symbol(eSyms.NEW.toString())
    }
}

export namespace o {
    const oSyms = sym("<o> typing", "key tag")

    export namespace mod {
        export const EXPORT :unique symbol =
            Symbol(oSyms.EXPORT.toString())
        export const IMPORT :unique symbol =
            Symbol(oSyms.IMPORT.toString())
    }
}

export namespace u {
    const uSyms = sym("<u> struct", "key tag")

    export namespace cls {
        export const CLASS :unique symbol =
            Symbol(uSyms.CLASS.toString())
        export const EXTENDS :unique symbol =
            Symbol(uSyms.EXTENDS.toString())
    }

    export namespace flow {
        export const FUN :unique symbol =
            Symbol(uSyms.FUN.toString())
            //… Function
    }
}