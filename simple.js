const cores = ["green", "red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn")
const cor = document.querySelector(".cor")

btn.addEventListener("click", function(){
    const numeroAleatorio = aleatorioEntre()
    document.body.style.backgroundColor = cores[numeroAleatorio];
    cor.textContent = cores[numeroAleatorio];   
});

function aleatorioEntre (){
    return Math.floor(Math.random()* cores.length)
}