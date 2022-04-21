var form=document.getElementById('form');
var username=document.getElementById('username');
var email=document.getElementById('email');
var password=document.getElementById('password');
var password2=document.getElementById('password2');


form.addEventListener('submit',function(e){

    //All Function 
    // Funaction to show error
      function showError(input,message) {
          const formControl = input.parentElement;    
          formControl.className = 'form-control error';    
          //how get smal element from html  
          const small = formControl.querySelector('small');
           small.innerText = message;
        }
//funaction to show success
   function showSuccess(input) {
       const formControl = input.parentElement;
       formControl.className='form-control success';
       
   }
   // funcation check email is valid or not
   function isvalidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }




    // prventdefault method stop the reload method
    e.preventDefault();
    // we are use .value funcation to get the value of the input text tab
   // console.log(username.value); 

    if (username.value === '') {
         // not suit === alert('user cant be empty');
          showError(username,'user name is required');
        } else {
            showSuccess(username);
        }

//email
if (email.value === '') {
    // not suit === alert('user cant be empty');
     showError(email,'email is required');
    } else if(!isvalidEmail(email.value)){
      showError(email,'email is invalid')
    } 
   
   else {
       showSuccess(email);
   }
//password

if (password.value === '') {
    // not suit === alert('user cant be empty');
     showError(password,'password is required');
   } else {
       showSuccess(password);
   }
//confrim password
  //email
if (password2.value === '') {
    // not suit === alert('user cant be empty');
     showError(password2,'confrim your password required');
   } else {
       showSuccess(password2);
   }




})