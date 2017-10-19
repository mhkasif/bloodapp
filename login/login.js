//login

var loginEmail=document.getElementById("loginEmail");
var loginPass=document.getElementById("loginPass");
var loginBtn=document.getElementById("loginBtn");

loginBtn.addEventListener("click",function(){
    var email=loginEmail.value;
    var password=loginPass.value;
    auth.signInWithEmailAndPassword(email,password)
    .then(function(){
      window.location.href="../register/register.html";
    })
    .catch(function(e){

     loginEmail.focus();
    })
   })
   //login end
   
   