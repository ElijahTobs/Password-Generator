let getPwd = document.getElementById("pwd-gen")
let pwd1 = document.getElementById("pwd1")
let pwd2 = document.getElementById("pwd2")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


getPwd.addEventListener("click", function(){
  let rand1Arr = []
  let rand2Arr = []

  for (let i = 1; i <= 15; i++){
    let rand1 = Math.floor(Math.random() * characters.length)
    let rand2 = Math.floor(Math.random() * characters.length)
  
    rand1Arr.push(characters[rand1])
    rand2Arr.push(characters[rand2])
  }

  pwd1.textContent = rand1Arr.join("")
  pwd2.textContent = rand2Arr.join("")
})

