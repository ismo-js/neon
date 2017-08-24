(module
    (import "share" "mem" (memory 1))
    (global $offset i32
        (i32.const 24)
    )


    (data
        (i64.const 3)
    )

    (func (export "sum")
        (param $l i32)
        (param $r i32)
        (result i32)

        (get_local $l)
        (get_local $r)
        (i32.add)
    )

    (func $grow
        (param $len i32)
        (result i32)

        (get_global $offset)
        (tee_local $addr)
        (get_local $len)
        (i32.add)
        (set_global $offset)

        (get_local $addr)
    )

    (func $decl
        (param $moth i32)
        (param $fath i32)
        (param $len i32)
        (result i32)
        (local $addr i32)
        (local $pos i32)


        (get_global $offset)
        (tee_local $addr)
        (tee_local $pos)

        (i32.const 1) ;; referenceConter `iRef`: 1
        (i32.store) ;; store `iRef`

        (get_local $pos)
        (i32.const 4)
        (i32.add)
        (tee_local $pos)

        (get_local $addr)
    )

    (func $con64
        (param $refSuLs i32)
        (param $head i64)
        (result i32)

        (get_local $refSuLs)
    )

    (func $len64
        (param $refSuLs i32)
        (result i32)
        (local $len i32)
    )
)
