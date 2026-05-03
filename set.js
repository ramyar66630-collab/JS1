 //set means unique characters

let set =  new Set();

set.add('ramya')
   .add('rakkesh')
   .add(1);//it does not allow duplicates

console.log(set.has(1));
//set.delete(1);

//to find how many elements
console.log(set.size);
console.log(set);
//to clear all the values
set.clear();
console.log(set);
//to itterate each values out
for(s of set)
{
    console.log(s);
} 

//trivia
let set = new Set();

set.add(9)
   .add(8)
   .add(7)
   .add(6)
   .add(5)
   .add(4)
   .add(3)
   .add(2)
   .add(1)
   .add(0)
   
console.log(set.size);