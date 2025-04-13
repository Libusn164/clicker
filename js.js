const text=document.getElementById("cislo")
const tlačítko=document.getElementById("obraz")
var počet=0

tlačítko.addEventListener("click", ()=>{
    počet++
    text.textContent=počet
})