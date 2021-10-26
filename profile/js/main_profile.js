function showing_profile_name(){
    var name=document.getElementById("profile_name");
    var email=sessionStorage.getItem("user_email");
    var user_details=localStorage.getItem(email);
    var user_data=JSON.parse(user_details);
    var fullname=atob(user_data.FirstName) +" "+ atob(user_data.LastName);
    name.innerHTML=fullname;

    var pic_box=document.getElementById("pic");
    var imageurl=localStorage.getItem(email+"user_profileimage");
    pic_box.style.background="url("+imageurl+")";
    pic_box.style.backgroundRepeat="no-repeat";
    pic_box.style.backgroundSize="cover";
}
showing_profile_name();

 function log_out(){
     sessionStorage.clear();
     document.getElementById("wait").style.display="block";
     setTimeout(function(){
         window.location="./../index.html";
     },2000);
 }