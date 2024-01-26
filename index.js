let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
let add = document.querySelectorAll("button")[0];
let submit = document.querySelectorAll("button")[1];
let p = document.querySelectorAll("p");

let count = 0;
add.addEventListener("click",() =>{
count +=1;
h2.innerHTML=count;
});

submit.addEventListener("click",()=>{
    p.innerHTML += `${count} -`;
    count=0;
    h2.innerHTML = count;
})

