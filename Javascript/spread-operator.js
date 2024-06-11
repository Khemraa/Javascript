//1. comining array
let A1=[10,20,30];
let A2=[40,50,60];
let A3=[...A1,...A2];
console.log(A3);
//we need to add ... before array(A1),(A2)

//2. passing argument
function Num(x,y){
  return x*y;
}
let A4 = [70,80];
console.log(Num(...A4));
//5600 from x*y

//3. add array
let array1 = [0,...A4];
console.log(array1);