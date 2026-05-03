let user = {
    name:'Ramya',
    age : 20,
    height : 5.7
};
console.log('dob' in user);

for(key in user){
    console.log(key + '-' + user[key]);
}

//values vs refernce

let a = {
    name: 'Ramya',
    age: 20
};
let b= a;

console.log(a,b);

b.age = 75  ;
console.log(a,b);

//const  we can change the properties of the object
//but we could not change the whole object like creating a new object

const R ={
    name:'Rocky',
    age:20
};
//a = {}//it does not allow me to create a new obj called const but we csn change the properties

R.age = 17;
console.log(R);



