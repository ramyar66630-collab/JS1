//7+11 =18
//+ is an operator
//7,11 are operands

//unary
 let x = -1;
x = -x;
console.log(x);

//binary operator +,-,*,/,%,**
let a=12,b=6;
let sum=a+b;
console.log(sum);

//** exponent operaator gives the power of the number
//let sum = a**b;//12^6

//string concatination we use + operator
let c = 'hi';
let d ='helo';

let sum1 = c+d;
console.log(sum1);

//number convertion

let e = '12';
let f = '6';

let sum2 = Number(e)+Number(f);//instead of this we can use +a + +b unary plus
console.log(sum2);

//assignment  operator =

let a=b=c=12; //chaining assginment
console.log(a,b,c);

//Modify in place

let x = 12;
x += 5;
console.log(x);

//increment / decrement

let x = 12;
console.log(x++);//12

let x=12;
console.log(x--);//12


//trivia

let h = 12;
let i = 13;

let j = ++h + i--;

console.log(j);




