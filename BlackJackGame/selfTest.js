let hands=['rock',"paper","scissor"]

function getHand(){
    let randomIndex=Math.floor(Math.random()*3)
    return hands[randomIndex]
}

//console.log(getHand())
const person = new Object();
person.fname="David";
person.lname="mutegeki";
person.age= 20;
person.fullname= function(){
    return this.fname + " "+this.lname

};


console.log(person.fullname())
//the delete keyword deletes a property from the object
delete person.age
for(let x in person){
   // console.log(person[x]);
}

//NESTED OBJECTS
const school ={
    name:"budo",
    age:20,

    class:{
        number:90,
        name:"5B",


    }

}
//adding a method to an object
school.sentence= function(){
    return "this is a method addition to an object"
}
console.log(school.class.name)
// any javascript object can be converted into an array using object.values(object name)

const arr= Object.values(person);

console.log(arr)

//using stringify
//Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

let mystring= JSON.stringify(person);
console.log(mystring)

//jason.stringify will not stringify functions and this can be fixed by converting the function into strings before stringifying
const persn = {
    name: "John",
    age: function () {return 30;}
  };
  persn.age = persn.age.toString();
  
  let mySring = JSON.stringify(persn);

 // console.log(mySring)

 //javascript object constructors .this is used to create multiple objects of the same  type
 function Person(first, last, age, eye) {// object constructor function
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
//console.log(myFather.firstName)

//javascript object prototype helps us add properties and methods to existing object contructors
Person.prototype.nationality = "English";
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

 // console.log(myFather)

  const group="maroon "

  for(let x in group){
    console.log(group[x])
  }
