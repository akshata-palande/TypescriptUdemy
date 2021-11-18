//ok
//Objects
let center: { x: number; y: number } = {
  x: 0,
  y: 0,
};

let unit: { x: number; y: number } = {
  x: 1,
  y: 1,
};

/* 
above can be written with alias.
advantages of alias 
1.Allows us to name intent
2.Allows to remove code duplication and maintains code
*/
type Point = { x: number; y: number };

let center1: Point = {
  x: 0,
  y: 0,
};

let unit1: Point = {
  x: 1,
  y: 1,
};
