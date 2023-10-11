const customerOptions=[];
const itemOptions=[];
let selectCustomer=document.getElementById("customerSelect");
let selectItem=document.getElementById("itemSelect");

enterCustomerIDS();
enterItems();



function enterCustomerIDS(){
    $("#customerSelect").empty();
    for(let i=0; i<customerDB.length; i++){
        customerOptions[i]=customerDB[i].id;
    }
  

    for(let i=0;i<customerOptions.length;i++){
        var opt=customerOptions[i];
        var el=document.createElement("option");
        el.text=opt;
        el.value=opt;
        selectCustomer.add(el);
    }
}

function enterItems(){
    for(let i=0; i<itemDB.length; i++){
        itemOptions[i]=itemDB[i].id;
    }
    $("#itemSelect").empty();

    for(let i=0;i<itemOptions.length;i++){
        var opt=itemOptions[i];
        var el=document.createElement("option");
        el.text=opt;
        el.value=opt;
        selectItem.add(el);
    }
}

selectCustomer.change(function(){
    let custID=selectCustomer.val();

    for(let i=0;i<customerDB.length;i++){
        if(customerDB[i].id==custID){
            $("#custTel").val(` ${customerDB[i].tp}`);
            $("#customerSalary").val(` ${customerDB[i].salary}`);
        }
    }
});

selectItem.change(function(){
    let itemID=selectItem.val();

    for(let i=0;i<itemDB.length;i++){
        if(itemDB[i].id==itemID){
            $("#itemPrices").val(` ${itemDB[i].unitPrice}`);
        }
    }
});
        
