# as-explore
AssemblyScript exploratory projects

## Directories

Project|Description
-------|-----------
apps/as-fib|Implementation of a fibonacci algorithm using AssemblyScript
apps/wat-fib|Same as as-fib but hand coded wat - see [CODING FIBONACCI IN WEBASSEMBLY BY HAND](https://www.youtube.com/watch?v=zRfAZihtLus)
apps/as-types|Shows unboxing `record` types for `enum` and `class`
packages/fib-common|Contains common code used in fibonacci tests and benchmarks

### Execute tests
At the repo root run these commands to execute the tests.

> Note as-explore is a monorepo that relies on [pnpm](https://pnpm.io/).

```
$ pnpm install
$ pnpm build
$ pnpm test
```

## as-fib benchmarks
There are 2 sets of benchmark suites available in [`as-fib/benchmarks/index.js`](./packages/as-fib/benchmarks/index.js).

They compare the execution characteristics of running the AssemblyScript-based wasm implementations (from [`as-fib/assembly/index.ts`](./packages/as-fib/assembly/index.ts)) and the exact same code written in JavaScript from [`as-fib/assembly/index.js`](./packages/as-fib/assembly/index.js).

Suite|Operation
-----|---------
fibonacciSuites|Runs fib(N) using the looping fibonacci implementations
fibRecurseSuites|Runs fib(N) using the _recursive_ fibonacci implementations

Each set of suites run fib(3) and fib(25) for relative comparison.

### Sample Benchmark Result
```

$ pnpm benchmark

> as-explore@1.0.0 benchmark <snip>/as-explore
> pnpm --filter as-fib benchmark


> as-fib@1.0.0 benchmark <snip>/as-explore/packages/as-fib
> node benchmarks

Running fibonacci_3
        AssemblyScript x 138,459,877 ops/sec ±1.32% (96 runs sampled)
        JavaScript x 189,202,922 ops/sec ±0.25% (93 runs sampled)
JavaScript won.

Running fibonacci_25
        AssemblyScript x 74,344,527 ops/sec ±0.77% (95 runs sampled)
        JavaScript x 44,296,659 ops/sec ±0.35% (95 runs sampled)
AssemblyScript won.

Running fibRecurse_3
        AssemblyScript x 58,730,650 ops/sec ±0.41% (94 runs sampled)
        JavaScript x 47,499,009 ops/sec ±0.33% (94 runs sampled)
AssemblyScript won.

Running fibRecurse_25
        AssemblyScript x 1,683 ops/sec ±0.43% (98 runs sampled)
        JavaScript x 927 ops/sec ±0.33% (95 runs sampled)
AssemblyScript won.

```
