/* start browser check*/
function check_browser(){
    if(navigator.userAgent.indexOf("MSIE")!=-1)
    {
        var webpage=document.getElementById("webpage");
        webpage.style.display="none";
        document.body.style.background="black";
        document.body.innerHTML="<h1 align='center' style='font-family:sans-sarif; font-size:100px'>please open in crome</h1>"
        document.body.style.color="white";
    }
}

/* end browser check*/

/* start cookies check*/
function checkcookie()
{   if(navigator.cookieEnabled==False)
    {
        var webpage=document.getElementById("webpage");
        webpage.style.display="none";
        document.body.style.background="black";
        document.body.innerHTML="<h1 align='center' style='font-family:sans-sarif; font-size:100px'>please turn on cookie</h1>"
        document.body.style.color="white";
    } 
}

/* end cookies check*/
var open=document.getElementById('open1');
var head=document.getElementById("head");
var doc=document.getElementById("doc");

function togol(){
    head.style.transition = "all 1s";
    head.classList.toggle('active');
}
function close(){
    head.style.display="none";
}