// The entry file of your WebAssembly module.

export function fibonacciAs(num: i32): i32 {
  // set initial values
  let fibn: i32 = 0;
  let fibn1: i32 = 1;
  let fibn2: i32 = 0;
  let n: i32 = num;

  // loop ... while n > 0
  while (n > 0) {
    fibn2 = fibn1;
    fibn1 = fibn;
    fibn = fibn1 + fibn2;
    n--;
  }

  return fibn;
}

export function fibRecurseAs(num: i32): i32 {
  if (num <= 1) return num;

  return fibRecurseAs(num - 1) + fibRecurseAs(num - 2);
}
