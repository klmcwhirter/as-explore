import assert from "assert";
import { fibonacci, fib_recurse } from "../build/as-fib.debug.js";
import { fibonacciJs, fibRecurseJs } from "../benchmarks/fib_lib.js";

function test_fibonacci(fib) {
    assert.strictEqual(fib(0), 0);
    assert.strictEqual(fib(1), 1);
    assert.strictEqual(fib(2), 1);
    assert.strictEqual(fib(3), 2);
    assert.strictEqual(fib(4), 3);
    assert.strictEqual(fib(5), 5);
    assert.strictEqual(fib(6), 8);
    assert.strictEqual(fib(17), 1597);
    assert.strictEqual(fib(37), 24157817);
    assert.strictEqual(fib(42), 267914296);
}

console.log('fibonacci:');
test_fibonacci(fibonacci);

console.log('fib_recurse:');
test_fibonacci(fib_recurse);

console.log('fibonacciJs:');
test_fibonacci(fibonacciJs);

console.log('fibRecurseJs:');
test_fibonacci(fibRecurseJs);

console.log("ok");
