let map = new Map();

//console.log(typeof (map));//object

//how to insert data in map
map.set(1,'ramya')
   .set(2,'rakkesh')
   .set(3,'undefined');

console.log(map.get(2));
//oruvishayam eruka illaiya check pandrathuku
console.log(map.has(2));

//delete
map.delete(2);
console.log(map);
//total ha clear pannanum na
//map.clear();
//console.log(map);
//map size theriyanum na
console.log(map.size);
//to return the keys of map

for(key of map.keys()){
    console.log(key);
}

//keys vena values venum na

for(key of map.values()){
    console.log(key);
}
//total ha venum na

for(key of map){
    console.log(key);
}
