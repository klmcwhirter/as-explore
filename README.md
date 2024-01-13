# as-explore
AssemblyScript exploratory projects

## Directories

Project|Description
-------|-----------
as-fib|Implementation of a fibonacci algorithm using AssemblyScript
wat-fib|Same as at-fib but hand coded wat - [CODING FIBONACCI IN WEBASSEMBLY BY HAND](https://www.youtube.com/watch?v=zRfAZihtLus)
as-types|Shows unboxing `record` types for `enum` and `class`

### Execute tests
In each of the project directories run these commands to execute the tests.

```
$ cd <Project>
$ npm install
$ npm run asbuild
$ npm test
```


## as-fib benchmarks
There are 2 sets of benchmark suites available in [`as-fib/benchmarks/index.js`](./as-fib/benchmarks/index.js).

They compare the execution characteristics of running the AssemblyScript-based wasm implementations and the same exact code as JavaScript in [`as-fib/benchmarks/fib_lib.js`](./as-fib/benchmarks/fib_lib.js).

Suite|Operation
-----|---------
fibonacciSuites|Runs fib(N) using the looping fibonacci implementations
fibRecurseSuites|Runs fib(N) using the _recursive_ fibonacci implementations

Each set of suites run fib(3) and fib(25) for relative comparison.

### Sample Benchmark Result
```
$ npm run benchmark

> as-fib@1.0.0 benchmark
> node benchmarks

Running fibonacci_3
        AssemblyScript x 214,629,885 ops/sec ±1.73% (93 runs sampled)
        JavaScript x 180,785,748 ops/sec ±1.81% (92 runs sampled)
AssemblyScript won.

Running fibonacci_25
        AssemblyScript x 89,975,283 ops/sec ±1.58% (94 runs sampled)
        JavaScript x 43,394,004 ops/sec ±0.69% (96 runs sampled)
AssemblyScript won.

Running fibRecurse_3
        AssemblyScript x 68,734,430 ops/sec ±0.68% (94 runs sampled)
        JavaScript x 47,129,723 ops/sec ±1.01% (97 runs sampled)
AssemblyScript won.

Running fibRecurse_25
        AssemblyScript x 1,650 ops/sec ±1.01% (96 runs sampled)
        JavaScript x 931 ops/sec ±0.33% (96 runs sampled)
AssemblyScript won.
```
