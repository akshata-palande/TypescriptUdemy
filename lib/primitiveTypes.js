"use strict";
let msg = "Hello word";
//primitive types
let isPresent = false;
let magic = 123;
let hello = "hello";
let notDefined = undefined;
let notPresent = null;
let penta = Symbol('star');
//BigInt is enabled in node_modules/typescript/lib/lib.es2020.bigint.d.ts, 
//so it is part of es2020 not part of esnext.
// Solution =>
// {
//     "compilerOptions": {
//       "lib": [
//         "es2020", "esnext"
//       ],
//       "module": "commonjs",
//       "target": "es2020",
//   }
let biggy = 24n;
console.log("string", msg);
console.log("boolean", isPresent);
console.log("number", magic);
console.log("string", hello);
console.log("undefined", notDefined);
console.log("null", notPresent);
console.log("symbol", penta);
console.log("bigint", biggy);
