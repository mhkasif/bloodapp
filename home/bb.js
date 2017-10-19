// var contact =document.getElementById("contact");
// var instruction =document.getElementById("instruction");
// var relation=document.getElementById("relation");
// var date=document.getElementById("date");
// var hospital=document.getElementById("hospital");
// var city=document.getElementById("city");
// var bg=document.getElementById("bg");
// var loginUSer=document.getElementById();
// var db=firebase.database().ref("/");
// function submit(){
//     console.log(contact.value)
//     console.log(city.value)
//     console.log(relation.value)
//     console.log(hospital.value)
//     console.log(instruction.value)
//     console.log(date)
//     console.log(bg.value)   ;
// }

// function submit(){
//     var user=JSON.parse(localStorage.getItem("user"))
//     obj={
//         name:user.firstname +user.lastname,
//         blood:a,
//         urgency:1day
//     }
//     db.child(`post/${user.uid}`).push(obj)
// }
// db,.child('post').on('child_added',function(snap){
// var demo=snap.val();
// for(var key in demo){
//     var element=demo.[key];
//     element.ID=key;
//     console.log("element");
// }
// })
var auth=firebase.auth();
var db=firebase.database().ref();
auth.onAuthStateChanged(function(user){
var bloodGroup=document.getElementById("bloodgroup");
var Unit=document.getElementById("unit");
var Urgency=document.getElementById("urgency");
var City=document.getElementById("city");
var Hospital=document.getElementById("hospital");
var Relation=document.getElementById("relation");
var Instruction=document.getElementById("instruction");
var Contact=document.getElementById("contact");
var Post=document.getElementById("post");
var userId=user.uid;
function UserData(bloodgroup, unit,urgency, city, hospital, relation, contact,instruction) {
    this.bloodgroup = bloodGroup.value;
    this.unit = Unit.value;
    this.urgency = Urgency.value;
    this.city = City.value;
    this.hospital = Hospital.value;
    this.relation = Relation.value;
    this.contact = Contact.value;
    this.instruction = Instruction.value;
  }
Post.addEventListener("click",function(){
    
    var bloodgroup = bloodGroup.value;
  var unit = Unit.value;
  var urgency=Urgency.value;
    var city = City.value;
    var hospital = Hospital.value;
    var relation = Relation.value;
    var contact = Contact.value;
    var instruction = Instruction.value;
    var userObj = new UserData(
        bloodgroup,
        unit,
      urgency,
      hospital,
      bloodgroup,
      relation,
      contact,
      instruction
    );
    console.log(userObj);
db.child("USERS").child(userId).child("post").update(userObj)
  

})
})