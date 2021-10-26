function login(){
    var user=btoa(document.getElementById("user").value);
    var password=btoa(document.getElementById("pass").value);
    var user_login_input={username:user,password:password};
    var user_login_data=JSON.stringify(user_login_input);
    sessionStorage.setItem(user,user_login_data);
    var sessionstorage_data=sessionStorage.getItem(user);
    var sessionstorage_data_object=JSON.parse(sessionstorage_data);
    if(localStorage.getItem(sessionstorage_data_object.username)==null)
    {
        alert("user not found");
    }
    else{
        if(localStorage.getItem(sessionstorage_data_object.username).match(sessionstorage_data_object.password)==password)
        {
            location.replace("profile/index.html");
            sessionStorage.setItem("user_email",user);
            return false;
        }
        else{
            alert("wrong password");
        }
    }
}