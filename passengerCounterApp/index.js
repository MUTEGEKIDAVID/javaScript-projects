//document.getElementById('count-el').innerHTML=5;
let count=0;
let saveEl= document.getElementById('saved');
let countEl=document.getElementById('count-el');
function counter(){
   // window.alert("increment clicked")
    
    count=count+1;

    countEl.innerHTML=count;
}

function saving(){
    let countStr=count+ " - ";
    
    saveEl.textContent +=countStr;
     
    countEl.textContent=0;
    count=0;// we need to set the entire count back to zero 

}

