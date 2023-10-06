const hex = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const cor = document.querySelector(".cor")

btn.addEventListener('click', function(){
    let hexCor = '#';
    for(let i =0;i<6;i++){
        hexCor += hex[aleatorioEntre()]
    }
    console.log(hexCor)
    cor.textContent = hexCor
    document.body.style.backgroundColor=hexCor;
})

function aleatorioEntre(){
return Math.floor(Math.random()*hex.length)
}