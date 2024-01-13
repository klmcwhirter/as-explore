async function instantiate(module, imports = {}) {
  const { exports } = await WebAssembly.instantiate(module, imports);
  return exports;
}
export const {
  fibonacci,
  fib_recurse
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
}
))(new URL("../build/wat-fib.wasm", import.meta.url));
