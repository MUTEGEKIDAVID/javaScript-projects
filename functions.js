//functions as expressions
let x =function(a,b){
    return a*b
}
// a function stored in a variable does not need a name
//console.log(x(2,4))

// function factorize(k){
//     let m= k*(factorize(k-1));
//     return m;
// }
// console.log(factorize(3))

//self invokation. you have to add parenthesis for the fuction to invoke itself
// (function () {
//     let x = "Hello!!";  // I will invoke myself
//   })();

let k=   "welcome"+(4+5);
//console.log(k)

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    },

    get fullnames(){
        return this.firstName+ " "+ this.lastName
    }
  }
  
  // This will return [object Object] (the owner object)
 // console.log(myObject.fullName());
  //console.log(myObject.fullnames)

  const student=(name)=>{
    return name;
  }

  console.log(student("david"))

  //using the call function in javascript
  //With call(), an object can use a method belonging to another object.
  //This example calls the fullName method of person, using it on person1:
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  person.fullName.call(person1);
  
//............the call method witha arguments
const peson = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const peson1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(peson1, "Oslo", "Norway");

//...the call and apply methods work the same the only difference being that the apply method takes
//in arguments as an array eg

person.fullname.apply(pson1,['oslo','Norway'])

//javascript bind- with a bind method, an object can borrow a method from another object