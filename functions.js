//functions as expressions
let x =function(a,b){
    return a*b
}
// a function stored in a variable does not need a name
console.log(x(2,4))

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
console.log(k)

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
  console.log(myObject.fullName());
  console.log(myObject.fullnames)
  
