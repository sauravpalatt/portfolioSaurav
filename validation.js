
function validation(){
   let username= document.getElementById("name");
   let email=document.getElementById("email").value;
   let regexp= /^([a-zA-Z0-9/_-.]+)@([a-zA-Z]+)(.[a-z]+)$/
   let result=regexp.test(email);
   let subject=document.getElementById("subject");
   let message=document.getElementById("message");

   if(username.value==""){
    alert("Oops !!, Username not found");
    document.sentmessage.name.focus();
    return false;
   }
   if(result==""||result==false){
    alert("Oops !!, Enter Valid Email ID");
    document.sentmessage.email.focus();
    return false;
   }
   if(subject.value==""){
    alert("Enter Subject");
    document.sentmessage.subject.focus();
    return false;
   }
   if(message.value==""){
    alert("Oops !!, Enter message text");
    document.sentmessage.message.focus();
    return false;
   }
   return true;
}