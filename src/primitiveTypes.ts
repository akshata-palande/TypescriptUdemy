let msg: string= "Hello word";



//primitive types

let isPresent:boolean = false;
let magic:number=123;
let hello:string="hello";
let notDefined:undefined = undefined;
let notPresent:null = null;
let penta:symbol = Symbol('star');
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
let biggy:bigint = 24n; 

console.log("string",msg);

console.log("boolean",isPresent);

console.log("number",magic);

console.log("string",hello);

console.log("undefined",notDefined);

console.log("null",notPresent);

console.log("symbol",penta);

console.log("bigint",biggy);