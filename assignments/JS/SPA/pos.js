
var itemLink=document.getElementById("#it").addEventListener("click",function(){
    
    document.querySelector("#home").style.display="none";
    document.querySelector("#orders").style.display="none";
    document.querySelector("#customer").style.display="none";

    var item=document.querySelector("#item");
    document.querySelector("#item").style.display="block";
    item.className=item.className.replace("d-none","d-block");
});
