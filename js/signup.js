/**This is for sinple signup */
function signup(){
    var username=btoa(document.getElementById("user_signup").value);
    var fast=btoa(document.getElementById("first").value);
    var last=btoa(document.getElementById("last").value);
    var email=btoa(document.getElementById("email").value);
    var password1=btoa(document.getElementById("pass_signup1").value);
    var password2=btoa(document.getElementById("pass_signup2").value);
    
    if(username!="" && fast!="" && last!="" && email!="" && password1!="" && password2!="")
    {
        var user_input={username:username,FirstName:fast,LastName:last,email:email,password:password2};
        var user_data=JSON.stringify(user_input);
        localStorage.setItem(email,user_data);
        document.getElementById("alert").innerHTML="sucess";
        document.getElementById("user_signup").value="";
        document.getElementById("first").value="";
        document.getElementById("last").value="";
        document.getElementById("email").value="";
        document.getElementById("pass_signup1").value="";
        document.getElementById("pass_signup2").value="";
        setTimeout(()=>{document.getElementById("alert").innerHTML="";},2000);
        return false;
    }
}
/**************************************************
 * ******check if user is logined then alert******
 **************************************************/
function check_user(){
    var email=btoa(document.getElementById("email").value);
    if(localStorage.getItem(email) != null){
        document.getElementById("user_defind").innerHTML="User alresdy existed ";
        document.getElementById("pass_signup1").disabled=true;
        document.getElementById("pass_signup2").disabled=true;
        document.getElementById("signup_submit").disabled=true;
        document.getElementById("email").classList.add("animate_pulse");
        document.getElementById("email").onclick=function(){
          this.value="";  
          document.getElementById("user_defind").innerHTML="";
        document.getElementById("pass_signup1").disabled=false;
        document.getElementById("pass_signup2").disabled=false;
        document.getElementById("signup_submit").disabled=false;
        }
    }   
}