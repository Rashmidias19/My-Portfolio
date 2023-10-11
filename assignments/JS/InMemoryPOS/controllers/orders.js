const customerOptions=[];

enterCustomerIDS();
function enterCustomerIDS(){
    var select=document.getElementById("customerSelect");
    for(let i=0; i<customerDB.length; i++){
        customerOptions[i]=customerDB[i].id;
    }
    

    for(let i=0;i<customerOptions.length;i++){
        var opt=customerOptions[i];
        var el=document.createElement("option");
        el.text=opt;
        el.value=opt;
        select.add(el);
    }
}
