getAllCustomers();

$("#btnCustomer").click(function(){
    if(checkAll()){
        saveCustomer();
    }else{
        alert("error");
    }
});

$("#btnViewAll").click(function(){
    getAllCustomers();
});

function bindTrEvents(){
    $("#tblCustomer>tr").click(function(){
        let id=$(this).children().eq(0).text();
        let name=$(this).children().eq(1).text();
        let age=$(this).children().eq(2).text();
        let tp=$(this).children().eq(3).text();
        let salary=$(this).children().eq(4).text();

        $("#custID").val(id);
        $("#CustName").val(name);
        $("#custAge").val(age);
        $("#custTp").val(tp);
        $("#CustSalary").val(salary);

    });
}

$("#btnCusDelete").click(function(){
    let id=$("#customerID").val();

    let con=confirm("Do you want to delete this customer ?");

    if(con){
        let response=deleteCustomer(id);
        if(response){
            alert("Customer Deleted Successfully. ");
            clearCustomInputFields();
            getAllCustomers();
        }else{
            alert("Customer not deleted!!!!");
        }
    }
});

$("#btnCusEdit").click();