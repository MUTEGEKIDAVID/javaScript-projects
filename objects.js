let persons={firstName:"John", 
            lastName:"Doe", 
            //getter method
            get fullname(){
                return this.lastName+ " "+this.firstName;
            },
            //setter
            set fname(_value){
                 this.firstName=_value
            },
            age:50, eyeColor:"blue",
            student:{class:"s6",studentNo:"2000700169"},
            pop3(){
                 console.log("pop3 has been called and accessed")
            }
        
        
        };

        persons.pop3()
       console.log(persons.fullname) //getters are accessed as properties rather than functions
       persons.fname="david";

       console.log(persons.fullname)
//console.log("my name is"+ person.firstName);

//delete persons.age;

// for(let x in person){
//     console.log(x);
// }

//console.log(person.student.class) 
// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }

// var x;
//   for (let i in myObj.cars) {
//     x +=  myObj.cars[i].name  ;
//     for (let j in myObj.cars[i].models) {
//       x += myObj.cars[i].models[j];
//     }
//     console.log(x)
//   }

//   console.log(x)
//javascript constructors
function person(fname,lname,age){
    this.fname=fname;
    this.lname=lname;
    this.age=age;


}
var myobject1= new person("david","mutegeki",50);
console.log("my name is "+myobject1.fname)

/**object iteratables
 * these are objects that can be iterated over using a for of
 */