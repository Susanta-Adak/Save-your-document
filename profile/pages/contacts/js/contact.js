/****Add contacts ****** */
function addContacts(){
    var name=document.getElementById("full_name").value;
    var pnum=document.getElementById("p_number").value;
    var snum=document.getElementById("s_number").value;
    if(name !="" && pnum !="" && snum !=""){
        if(pnum.length==10 && snum.length==10){
            var user={fullname:name,primaryNumber:pnum,secondaryNumber:snum};
            var user_data=JSON.stringify(user);
            localStorage.setItem(name+"contact",user_data);
            var form=document.getElementById("add_data");
            form.reset();
            document.getElementById("notice").style.display="block";
            setTimeout(function(){
                document.getElementById("notice").style.display="none"; 
            },2000);
            window.location=location.href;
        }
        else{
            alert("Number must be ten degit!");
        }
        
    }
    else{
        alert("This fild is requird");
    }
}
/**Preaview contauct */
/*alert(localStorage.length);*/
function displayContauct(){
    var i;
    for(i=0;i<localStorage.length;i++){
        var keys=localStorage.key(i);
        if(keys.match("contact")){
            var json_text=localStorage.getItem(keys);
            var json_extract=JSON.parse(json_text);
            var contact=document.getElementById("contact_name");
            var fieldset=document.createElement("FIELDSET");
            var legend=document.createElement("LEGEND");
            var p1=document.createElement("P");
            var p2=document.createElement("P");
            var i1=document.createElement("I");
            contact.appendChild(fieldset);
            fieldset.appendChild(legend);
            legend.appendChild(document.createTextNode(json_extract.fullname));
            fieldset.appendChild(p1);
            p1.appendChild(document.createTextNode(1+". +91 "+json_extract.primaryNumber));
            fieldset.appendChild(p2);
            p2.appendChild(document.createTextNode(2+". +91 "+json_extract.secondaryNumber));
            fieldset.appendChild(i1);
            i1.setAttribute("class","fa fa-trash-o");
            i1.setAttribute("style","font-size:25px");
            delete_contadt(keys,i1);
        }
    }
}
displayContauct();
function delete_contadt(contactname,del_btn){
    del_btn.onclick=function(){
        var answer=confirm("Do you want to delete contact?");
        if(answer){
            var field_set=this.parentElement;
            field_set.remove();
            localStorage.removeItem(contactname);
        }
    }
}