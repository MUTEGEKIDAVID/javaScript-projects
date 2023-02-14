//arrays- an array is a  data structure that contains an ordered list of items of the same type in an indexed format for eas
//manipulation
let name="david"
let featurePosts=["check out my netflix clone",
"Here's the code for my project",
"I've jusr relaunched my portfolio"
]

let skills=["football","very hardworking","works well under pressure"]

console.log(skills.length)

//arrays with multiple data types
/**
 * array-ordered list of items-coposite/ complex data type
 * 
 */
let profile=["david mutegeki",23,true]

let cards=[7,4]
//adding an item to the array
cards.push(6);

//console.log(cards)

cards.pop();
//console.log(cards)

/**
 * OBJECTS
 * store data in depth- composite/complex data type
 * key-value pairs
 */
let course={
    title:"learn css Grid for free",
    lessons:16,
    creator:"david mutegeki",
    length:63,
    level:"intermediate",
    isFree:true,
    tags:['html','css']
}

console.log(course.title)

let castle={
    title:"live like a king",
    price:190,
    isSuper:true,
    images:["img/castle.png","dog.png "]

}

let person={
    name:"david mutegeki",
    age:"22",
    country:"uganda"
}

function logData(){
    let string= person.name +" "+"is"+person.age+ " years old and lives in "+person.country
    console.log(string)
}

logData()

//arrays
let largeCountries=["Tuvalu","USA","india","Indonesia","Monaco"]

largeCountries.pop()
largeCountries.push("pakistan")

console.log(largeCountries)

largeCountries.shift()//removes first item in the array
largeCountries.unshift("congo")

console.log(largeCountries)
