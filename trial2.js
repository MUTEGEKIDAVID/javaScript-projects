class person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
     printAge(){
        console.log("my name is"+this.name);
  
    }
}

let obj1=new person("mutegeki david",23);

obj1.printAge();
