//JSON - JavaScript Object Notation
//object form la data kudukurathu dhan JSON

//object ha apdi JSON ha mathalam
let user = {
    name: 'Ramya',
    age : 20,
    salary: 10000
};
console.log(JSON.stringify(user));//objetc ha eduthu string ha convert panni kuduthuruku

//normal string ha apadi JSon ha mathalam
let user1 = '{"name": "Ramya","age" : 20}';

console.log(JSON.parse(user1));
