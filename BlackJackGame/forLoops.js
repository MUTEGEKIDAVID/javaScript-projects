
// for(let count=10; count<=100; count+=10){
//     console.log(count)

// }

let player1Time=102
let player2Time=107

function getFastest(){
    if(player1Time < player2Time){
        return player1Time
    }else if(player2Time < player1Time){
        return player2Time

    }else{
        return player1Time
    }
}

let fastestRace= getFastest();

console.log(fastestRace)

/**
 * what does math.random() do?
 * 
 * it generates a random number fro 0 to 1 not inclusive of 1
 */
let random=Math.random()*6;

let mathfloor=Math.floor(3.55)//math floor function removes the decimals

function rolldice(){
    let randNumber=Math.floor(Math.random()*6)+1

    return randNumber;

}
console.log(rolldice())
