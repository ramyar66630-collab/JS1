let x = {};//object declaration

console.log(typeof(x));


let EngineOption = "petrol,diesel";
let car = {
    name : 'BMW',
    brand : 'Tata',
    engine : 'petron,diesel',
    price : 15,
    "drive Train" : EngineOption, //we can keep space but it should be in string formet for the variable
    onRoadPrice(Price)
    {
        return this.Price+2;
    }
};
car['ModelYear'] = 2024;//used to add the property
car.price = 18;//updating price
console.log(car);//to extract perticular property of object
console.log(car.onRoadPrice(10));
/*
delete car.price;
console.log(car);
*/

//trivia

let user = {
    name : 'Ramya',
    age : 20,
};
//console.log(user.name);
user.name = 'Ramya R';
console.log(user.name);

delete user.name;
console.log(user.name); 