enum VarInstruc {
    Get(Loc),
    Set(Loc),
    Tee(Loc),
    GlobGet(Glob),
    GlobSet(Glob),
}

enum BlockInstruc {
    Block {
        label: Label,
        result: Type,
        expr: Instruc[],
    },
    Loop {
        label: Label,
        result: Prim,
        expr: Instruc[],
    },
    If {
        label: Label,
        result: Prim,
        then: Instruc[],
        besides: Instruc[],
    },
}

enum ControlInstruc {
    Trap, // unreachable
    Nop,
    Br(Label),
    BrIf(Label),
    BrTable {
        table: Label[],
        default: Label,
    },
    Return,
    Call(Func),
    CallIn(Type),
}

enum ParamInstruc {
    Drop,
    Select,
}

enum MemInstruc {
    LoadS(),
    LoadF(Label),
}

fn main() {
    println!("Hello!");
}
