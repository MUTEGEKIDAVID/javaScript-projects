/**use the keyword class to create a class.
 * always add a method called constructor to your class
 */


//create a class named year that returns the age of the car
class car{
    constructor(model,year){
    this.model=model;
    this.year=year;

    }

    age(){
        let year=new  Date();
        return year.getFullYear()-this.year   }
}

let mycar1= new car("ford",1999);
let aged=mycar1.age()

console.log(aged);


//class inheritence using the "extends" keyword
/**
 * a class created with inheritance inherits all the properties and methods from its parent class
 * 
 */
 class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model; 
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  console.log( myCar.show());
  console.log( myCar.present());

  //static methods
  /**you cannot call a static method on an object but only on a class
   * see example below
   */
   class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  let mCar = new Car("Ford");
  
  // You can call 'hello()' on the Car Class:
   console.log( Car.hello());
  
  // But NOT on a Car Object:
  // document.getElementById("demo").innerHTML = mCar.hello();
  // this will raise an error.

  //if you want to use an object in a static method you can send it as a parameter
  class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
  let miCar = new Car("Ford");
  console.log( Car.hello(miCar));

  //media queries are used for responsiveness: read more about responsiveness
  