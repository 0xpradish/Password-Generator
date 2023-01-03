const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let ifDisplayed=false
let displayel=document.getElementById("p1");
let password="";
let generatePasswordbtn=document.getElementById("gpbtn")
function generatenewPassword(){
password="";
for(let i=0;i<15;i++){
  let randomNumber=Math.floor(Math.random()*89);
  password+=characters[randomNumber]
}
return password

}
let forCopy=""
function generatePassword(){
  let str=generatenewPassword()
  displayel.textContent=str
  generatePasswordbtn.textContent="New Password"
  forCopy=str
  
}

function copyPassword() {
  // Get the text field
  let copyText = document.getElementById("p1");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.valueof);

  // Alert the copied text
  alert("Copied the text: " + copyText.valueOf);
}






