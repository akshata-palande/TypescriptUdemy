//Array 
/*array variable has block scope,
as it is already declared in instanceTypes*/
let array1:number[]=[1,2,3];

//Usage 
array1=[1];
array1=[1,2,3,4,5];
//array1=['hello']; //compile time arror in ts

//Tuple 
/* is matrix used to stored n dimention array */
let tuple:[number,number]=[0,0];

//Usage
tuple = [1,1];
tuple = [2,6];
//tuple = [5]; //Error must be 2 items
//tuple = [1,2,3];//Error must be 2 items
//tuple = ["elite",1334]; //Error must be number