let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = (event) => {

  event.preventDefault();
document.body.classList.toggle("dark-mode");
    // Write your code to manipulate the DOM here
}
themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.

let signNowButton = document.getElementById("sign-now-button");








 let count = 3;
const addSignature = () => {
  
const reqlist = document.querySelector('#signatures');
  
    const name = document.querySelector('#name').value;
  const hometown = document.getElementById('hometown').value;
    const email = document.getElementById('email').value;
const request = "🖊️ "+ name +" from " + hometown + " supports this cause";

count = count + 1;
  
const p = document.createElement('p');
p.innerText = request;
reqlist.appendChild(p);
 

  
const reqlist2 = document.querySelector('#count');


reqlist2.innerText = count +" people have signed this petition and support this cause.";



}






const validateForm = () => {

  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

  for(let i = 0; i<petitionInputs.length;i++){
    if(petitionInputs[i].value.length < 2){
      
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }else{
      petitionInputs[i].classList.remove('error');
    }
    
  }
  
  const email = document.getElementById('email');
  if(!email.value.includes('.com')){
    containsErrors = true;
    email.classList.add('error');
  }else{
    email.classList.remove('error');
  }

 if(containsErrors == false){
   addSignature();
    for(let i =0 ;i<petitionInputs.length;i++){
     petitionInputs[i].value ="";
     containsErrors = false;
   }
 }
}
  
signNowButton.addEventListener('click',  validateForm);


