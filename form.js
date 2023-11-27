const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpwd = document.querySelector('#confirmpwd');

form.addEventListener('submit',(e)=>{
   if(!validateInputs()){
    e.preventDefault()
   }
})
form.addEventListener('click',(e)=>{
    if(!validateInputs()){
     e.preventDefault()
    }
 })
function validateInputs(){
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const passwordVal = password.value.trim();
const confirmpwdVal = confirmpwd.value.trim();
let success=true

if(usernameVal===''){
    success=false;
    setError(username, 'username is required');
}
else{
    setsuccess(username);
}
if(emailVal===''){
    success=false;
    setError(email, 'email is required');

}
else if(!validateEmail(emailVal)){
    success=false;
    setError(email, 'your email adderess invalid please try again');
}
else{
    setsuccess(email);
}
if(passwordVal===''){
    success=false;
    setError(password, 'password is required');

}
else if(passwordVal.length<8){
    success=false;
    setError(password, 'password must be atleast 8 characters ');

}
else{
    setsuccess(password);
}
if(confirmpwdVal===''){
    success=false;
    setError(confirmpwd, 'confirmpassword is required');

}
else if(confirmpwdVal!==passwordVal){
    success=false;
    setError(confirmpwd,'your confirmpassword mismatched');
}
else{
    setsuccess(confirmpwd);
}
return success
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setsuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }; 