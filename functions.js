//functions code reuseablity

/* function opertion(a=12,b=90)//we can also assign default value if we not pass the single value it take the default value)//parameters
{
    console.log((a+b*b/a)*b);
}
opertion(1,2);
opertion(3,4);
opertion(2,3);
opertion(2);//NaN */

//scope
//indha c global variable
let c;//veliya variale create pannidanum
function opertion(a=12,b=90)//we can also assign default value if we not pass the single value it take the default value)//parameters
{
    c = (a+b*b/a)*b;//local variable edhoda scope edhukulla dha eruko//suppose inga create panna adhu ingaiyae andha operation perfform pannitu igayae sethu poidum so adhan scope so veliya create panannum namba
}
opertion(2,3);
console.log(c);

let f = 10;

function oddEven(f){
    if(f%2==0)
    {
        return "Even";
    }
    return"odd";
}
console.log(oddEven(f));
//storing function in variable called assigning

let oddOrEven = oddEven;

console.log(oddEven(9));

//arrow functions

let H = 11;
let oddorEven = (H) => H%2==0? "Even" : "Odd";

console.log(oddEven(H));