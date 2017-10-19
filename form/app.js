var fullName = document.getElementById("fullname");
var Email = document.getElementById("email");
var Password = document.getElementById("password");
var City = document.getElementById("city");
var bloodGroup = document.getElementById("bloodgroup");
var phoneNumber = document.getElementById("phonenumber");
var male = document.getElementById("male");
var female = document.getElementById("female");
var gender = null;
var startBtn = document.getElementById("getstarted");
var db = firebase.database().ref();
var auth = firebase.auth();
console.log(email.value)

function UserData(fullname, email, city, bloodgroup, phonenumber, gender) {
  this.fullname = fullName.value;
  this.email = Email.value;
  this.city = City.value;
  this.bloodgroup = bloodGroup.value;
  this.phonenumber = phoneNumber.value;
  this.gender = gender;
}
startBtn.addEventListener("click", function() {
  if (male.checked) {
    gender = male.value;
  } else {
    gender = female.value;
  }

  var fullname = fullName.value;
var email=Email.value;
  var city = City.value;
  var bloodgroup = bloodGroup.value;
  var phonenumber = phoneNumber.value;
  var password = Password.value;
  var gender = gender;
  var userObj = new UserData(
    fullname,
    email,
    city,
    bloodgroup,
    phonenumber,
    gender
  );
  console.log(userObj);

//signup
  auth.createUserWithEmailAndPassword(email, password)
  .then(function(res){
  userId=res.uid;
//   window.location.href="../register/register.html";
  
  db.child("USERS").child(userId).child("userInfo").set(userObj);
  console.log(userObj);
  
  
  })
  .catch(function(e){
   console.log(e.message);
   window.location.href="../home/bb.html"

  })
  
  

  //signup end 
});
