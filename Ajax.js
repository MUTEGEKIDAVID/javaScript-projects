//syntax for creating an xmlRequest Object
let variable = new XMLHttpRequest();
/**a  callback function is a function passed as a perimeter to another function 
 * in this case the callback function should have the code to execute when the response is ready
*/
//snytax
xhttp.onload= function(){
    //code to execute
}
//sending a request to the server
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
//...................EXAMPLE................................................
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
}

// Send a request
xhttp.open("GET", "ajax_info.txt");
xhttp.send();