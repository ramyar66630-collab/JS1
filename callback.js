//oru function ha innoru function ku parametr ha send pandrathu dhan call back

function operation(op,a,b){
    return op(a,b);
}
let add = (a,b) => a+b;//return
function sub (a,b){
    return a-b;

} /*function sub(a,b){
                          return a-b; } */


console.log(operation(sub,2,3));

//trivia to get input and multiple with 5

let x5 = (n) => 5*n;

console.log(x5(6));