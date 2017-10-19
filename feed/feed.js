var auth=firebase.auth();
var db=firebase.database().ref();
auth.onAuthStateChanged(function(user){
var bloodGroup=document.getElementsByName("bloodgroup")[0];
var Unit=document.getElementsByName("unit")[0];
var Urgency=document.getElementsByName("urgency")[0];
var City=document.getElementsByName("city")[0];
var Hospital=document.getElementsByName("hospital")[0];
var Relation=document.getElementsByName("relation")[0];
var Instruction=document.getElementsByName("instruction")[0];
var Contact=document.getElementsByName("contact")[0];

var userId=user.uid;

db.child("USERS").child(userId).child("post").on("value",function(snap){
bloodGroup.placeholder="bloodGroup: "+snap.val().bloodgroup;
Unit.placeholder="no of unit required: "+snap.val().unit;
Urgency.placeholder="urgency :"+snap.val().urgency;
City.placeholder="CITY: "+snap.val().city;
Hospital.placeholder="Hospital: "+snap.val().hospital;
Relation.placeholder="Relation : "+snap.val().relation;
Instruction.placeholder="Additional Instruction: "+snap.val().instruction;
Contact.placeholder="Contact Number: "+snap.val().contact;

})




})