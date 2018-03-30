import {a, e, o, u} from "./key-syms"

// ~~~

export const map = {
    "await": e.prom.AWAIT,
    "break": a.flow.BREAK,

    "case": a.flow.CASE,
    "catch": a.exc.CATCH,
    "class": u.cls.CLASS,
    "const": a.decl.CONST,
    "continue": a.flow.CONTINUE,

    "debugger": a.meta.DEBUGGER,
    "default": a.flow.DEFAULT,
    "delete": a.decl.DELETE,
    "do": a.flow.DO,

    "else": a.bra.ELSE,
    "export": o.mod.EXPORT,
    "extends": u.cls.EXTENDS,

    "finally": a.exc.FINALLY,
    "for": a.flow.FOR,
    "function": u.flow.FUN,

    "if": a.bra.IF,
    "import": o.mod.IMPORT,
    "in": e.oper.IN,

    "new": e.oper.NEW,

    "return": a.flow.RETURN,
}