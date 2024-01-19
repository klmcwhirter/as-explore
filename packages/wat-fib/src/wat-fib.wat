(module
    (func $fibonacciAs (param $num i32) (result i32)
        (local $fibn i32)
        (local $fibn1 i32)
        (local $fibn2 i32)
        (local $n i32)

        ;; set initial values

        ;; let fibn: i32 = 0;
        i32.const 0
        local.set $fibn

        ;; let fibn1: i32 = 1;
        i32.const 1
        local.set $fibn1

        ;; let fibn2: i32 = 0;
        i32.const 0
        local.set $fibn2

        ;; let n: i32 = num;
        local.get $num
        local.set $n

        loop $while-continue|0
            ;; while n > 0
            local.get $n
            i32.const 0
            i32.gt_s
            if 
                ;; fibn2 = fibn1;
                local.get $fibn1
                local.set $fibn2

                ;; fibn1 = fibn;
                local.get $fibn
                local.set $fibn1

                ;; fibn = fibn1 + fibn2;
                local.get $fibn1
                local.get $fibn2
                i32.add
                local.set $fibn

                ;; n--;
                local.get $n
                i32.const 1
                i32.sub
                local.set $n

                ;; send to top of loop
                br $while-continue|0
            end
        end

        ;; return fibn;
        local.get $fibn
    )
    (export "fibonacciAs" (func $fibonacciAs))

    (func $fibRecurseAs (param $num i32) (result i32)
        ;; if (num <= 1) return num;
        local.get $num
        i32.const 1
        i32.le_s
        if
            local.get $num
            return
        end

        ;; return fibRecurseAs(num - 1) + fibRecurseAs(num - 2);
        local.get $num
        i32.const 1
        i32.sub
        call $fibRecurseAs

        local.get $num
        i32.const 2
        i32.sub
        call $fibRecurseAs

        i32.add
    )
    (export "fibRecurseAs" (func $fibRecurseAs))
)
