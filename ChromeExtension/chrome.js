let BtnSave=document.getElementById("input-btn");
let myleads=[];
const inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el");

/**alternative method */
// function clickSave(){
//let and const are same but const can not be reassigned
// window.alert("button clicked");
// }

/**Event listener style */
BtnSave.addEventListener("click",function(){
    myleads.push(inputEl.value);

    for(let i=0;i<myleads.length;i++){
        ulEl.innerHTML += "<li>"+ myleads[i] + "</li> "
    
    }
    
    
})


