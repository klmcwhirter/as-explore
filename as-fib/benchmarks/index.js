import Benchmark from "benchmark";

import { fibonacci, fib_recurse } from "../build/as-fib.js";
import { fibonacciJs, fibRecurseJs } from "./fib_lib.js";

function runSuite(suite) {
    console.info("Running", suite.name);

    suite
        .on("cycle", function (event) {
            console.info("\t" + event.target.toString());
        })
        .on("complete", function (_event) {
            console.info(this.filter("fastest").map("name") + " won.\n");
        })
        .run();
}

function fibonacciSuites() {
    const fibonacciAs = fibonacci;

    const fibonacci_3 = Benchmark.Suite("fibonacci_3");
    fibonacci_3
        .add("AssemblyScript", () => fibonacciAs(3))
        .add("JavaScript", () => fibonacciJs(3));
    runSuite(fibonacci_3);

    const fibonacci_25 = Benchmark.Suite("fibonacci_25");
    fibonacci_25
        .add("AssemblyScript", () => fibonacciAs(25))
        .add("JavaScript", () => fibonacciJs(25));
    runSuite(fibonacci_25);
}

function fibRecurseSuites() {
    const fibRecurseAs = fib_recurse;

    const fibRecurse_3 = Benchmark.Suite("fibRecurse_3");
    fibRecurse_3
        .add("AssemblyScript", () => fibRecurseAs(3))
        .add("JavaScript", () => fibRecurseJs(3));
    runSuite(fibRecurse_3);

    const fibRecurse_25 = Benchmark.Suite("fibRecurse_25");
    fibRecurse_25
        .add("AssemblyScript", () => fibRecurseAs(25))
        .add("JavaScript", () => fibRecurseJs(25));
    runSuite(fibRecurse_25);
}

fibonacciSuites();
fibRecurseSuites();
