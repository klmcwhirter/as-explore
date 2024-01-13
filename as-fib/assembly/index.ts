// The entry file of your WebAssembly module.

export function fibonacci(num: i32): i32 {
  // set initial values
  var fibn: i32 = 0;
  var fibn1: i32 = 1;
  var fibn2: i32 = 0;
  var n: i32 = num;

  // loop ... while n > 0
  while (n > 0) {
    fibn2 = fibn1;
    fibn1 = fibn;
    fibn = fibn1 + fibn2;
    n--;
  }

  return fibn;
}

export function fib_recurse(num: i32): i32 {
  if (num <= 1) return num;

  return fib_recurse(num - 1) + fib_recurse(num - 2);
}
