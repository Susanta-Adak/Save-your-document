/**
 ********** For url security********
 */
function url_secure(){
    if (sessionStorage.length<=0){
        var page=document.getElementById("mainpage");
        page.style.display="none";
        document.body.style.background="black";
        document.body.innerHTML="<h1 style='color:white;'>Illigal action performed</h1>"
    }
}
url_secure();

/************************************************************************
 * ***** If user is login second time then don't display profile page*****
 *************************************************************************/
function stop_upload(){
    if(localStorage.getItem(sessionStorage.getItem('user_email')+"user_profileimage")!=null){
        document.getElementById("mainpage").style.display="none"; 
        document.getElementById("profile_page").style.display="block";
    }
}
stop_upload();

/***********************
 * ****upload picture***
 * *********************/
function upload_pic(){
    var input=document.getElementById("file_name");
    var freader=new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onloadend=function(event){
        var show=document.getElementById("profile_photo");
        var image_url=event.target.result;
        show.style.background="url("+event.target.result+")";
        show.style.backgroundRepeat="no-repeat";
        show.style.backgroundSize="cover";
        document.getElementById("upload_icon").style.display="none";

        var next=document.getElementById("next");
        next.style.display="block";
        next.onclick=function(){
        localStorage.setItem(sessionStorage.getItem('user_email')+"user_profileimage",image_url);
        document.getElementById("mainpage").style.display="none";
        document.getElementById("profile_page").style.display="block";
        window.location=location.href;
    }
    }
    
}

/************************************************************
 ********** After login print profile name fro localstorage *******
 ************************************************************/
function user_profile(){
    var email=sessionStorage.getItem("user_email");
    var userjsondata=localStorage.getItem(email);
    var userStringData=JSON.parse(userjsondata);
    var fullname=atob(userStringData.FirstName)+" "+atob(userStringData.LastName);
    document.getElementById("prof_name").innerHTML=fullname;
}
user_profile();


