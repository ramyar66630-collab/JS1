let a = {
    name : 'Ramya',
}

function User(a)//constructor is also a funciton
//constructor should start with caps
{
    //this = {};
    this.name = a;
    //return this
}

let Ramya = new User('Ramya');
let Rakkesh = new User('Rakkesh');

console.log(Ramya,Rakkesh);


//inside constructor we can also call function
/*function User(){
this.name = 'code io';
this.age = function(){
    return 20;
}

let goms =new User();

console.log(Ramya.age());*/
