//Array
/*
let veges = [];

//veges = ['carrot',{name:'ramya'},function add(a,b){return a+b},'beetroot',true,null,undefined];//we can store any datatype even we cann store object and functions non primitive datatypes
veges = ['carror','apple','Mango'];
//Adding words
//veges.push('beans');//adds the beans at last
//console.log(veges);
veges.unshift('beans');//it adds the beans at first
console.log(veges);
//remove
console.log(veges.pop());//removes last word
console.log(veges.shift());//removes first word


/*veges[3]  = 'parrot';
console.log(veges[3])*/


//using for loop

let vegs = [];
vegs = ['carrot','Mango','Beetroot'];

for(veg of vegs){
    console.log(veg);
}

//to find the length of array
console.log(vegs.length)

//2D Array
let mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//console.log(mat[0][0]);

for(let i=0;i<mat.length;i++){
    for(let j=0;j<mat[i].length;j++){
    console.log(mat[i][j]);
}
}

