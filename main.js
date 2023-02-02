let counter = 0;
/*
    function addCounter(){
        let counterView = document.querySelector("#counterView");
        counter = counter + 1;
        counterView.innerHTML = counter;
        
    }
    let plusBut = document.querySelector("#plus");
    plusBut.addEventListener("click",addCounter);

*/


document.querySelector("#plus").addEventListener("click",()=>{
    document.querySelector("#counterView").innerHTML = ++counter;
});

document.querySelector("#minous").addEventListener("click",()=>{
    document.querySelector("#counterView").innerHTML = --counter;
});