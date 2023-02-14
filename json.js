let myjson='{"name":"John", "age":30, "city":"New York"}'

let obj=JSON.parse(myjson);

console.log(obj);

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);

console.log(myArr)

let date= new Date();


//converting a string to a date
const texts = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const objj= JSON.parse(texts);
objj.birth = new Date(objj.birth);

console.log(objj.name + ", " + objj.birth);

//functions are not allowed in json so yiu first store the function as a string and later convert it to a function
let txt = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const ob = JSON.parse(txt);
ob.age = eval("(" + ob.age + ")");

console.log( ob.name + ", " + ob.age());

// we use a stringify( method to convert a javascript object into a string)
const object = {name: "John", age: 30, city: "New York"};
let result= JSON.stringify(object);
console.log(result)