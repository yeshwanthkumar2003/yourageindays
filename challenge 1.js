//challenge in age in days

function ageindays(){
   var birthyear=prompt("which year you are born dear friend");
   var ageindayss=(2022-birthyear)*365;
   //creating document
   var h1=document.createElement("h1");
   var textanswer=document.createTextNode("you are "+ageindayss+" days old");
   h1.setAttribute('id','ageindays');
   h1.appendChild(textanswer);
   document.getElementById("Flex-box-result").appendChild(h1);
   
}
function reset(){
    document.getElementById("ageindays").remove();
}