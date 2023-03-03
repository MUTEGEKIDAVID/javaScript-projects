//with the bind method an object can borrow a method from another object
/**the example below creates two objects person and meber
 *  the member object borrows the fullname method from person
 * this returns a method
 * 
 */
 const personz = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }

  let fullname=personz.fullName.bind(member)

  console.log(fullname())


  /**variables created without let,const, or var keyword are always global whether the
   * are declared insidee a function
   * forxample: function myfunc(){
   *  b=4;
   * }
   */