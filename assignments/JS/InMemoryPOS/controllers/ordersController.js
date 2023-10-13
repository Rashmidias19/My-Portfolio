const customerOptions = [];
const itemOptions = [];
let selectCustomer = document.getElementById("customerSelect");
let selectItem = document.getElementById("itemSelect");

enterCustomerIDS();
enterItems();
generateOrderId();


function enterCustomerIDS() {
    $("#customerSelect").empty();
    for (let i = 0; i < customerDB.length; i++) {
        customerOptions[i] = customerDB[i].id;
    }


    for (let i = 0; i < customerOptions.length; i++) {
        var opt = customerOptions[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        selectCustomer.add(el);
    }

}

function enterItems() {
    for (let i = 0; i < itemDB.length; i++) {
        itemOptions[i] = itemDB[i].id;
    }
    $("#itemSelect").empty();

    for (let i = 0; i < itemOptions.length; i++) {
        var opt = itemOptions[i];
        var el = document.createElement("option");
        el.text = opt;
        el.value = opt;
        selectItem.add(el);
    }
}

var customDB = [
    { id: "C00-001", name: "Sachin Thamalsha", age: "21", tp: "0743157372", salary: 100000 },
    { id: "C00-002", name: "Ranjith Perera", age: "21", tp: "0743157372", salary: 200000 },
    { id: "C00-003", name: "Kavindu Perera", age: "21", tp: "0743157372", salary: 300000 }
];

var itDB = [
    { id: "I00-001", name: "Lux", qtyOnHand: 100, unitPrice: 145.00 },
    { id: "I00-002", name: "Sunlight", qtyOnHand: 150, unitPrice: 345.00 },
    { id: "I00-003", name: "Light Boy", qtyOnHand: 400, unitPrice: 245.00 }
];

$("#customerSelect").change(function () {
    $(this).val($(this).val());
    var customer = searchCustomer($(this).val());
    $("#custTel").val(customer.tp);
    $("#customerSalary").val(customer.salary);

    setAndTriggerValue($("#custTel"), customer.tp);
    setAndTriggerValue($("#customerSalary"), customer.salary);
    dateCheck();
});

$("#itemSelect").change(function () {
    $(this).val($(this).val());
    var item = searchItem($(this).val());
    $("#itemPrices").val(item.unitPrice);
    $("#itemsQTY").val(item.qtyOnHand);

    setAndTriggerValue($("#itemPrices"), item.unitPrice);
    dateCheck();
});

function generateOrderId() {

    if (orderDB.length == 0) {
        $("#order-id").val("OID-0001");
    } else if (orderDB.length > 0) {
        var id = orderDB[orderDB.length - 1].oid.split("-")[1];
        var tempId = parseInt(id);
        tempId = tempId + 1;
        if (tempId <= 9) {
            $("#order-id").val("OID-000" + tempId);
        } else if (tempId <= 99) {
            $("#order-id").val("OID-00" + tempId);
        } else if (tempId <= 999) {
            $("#order-id").val("OID-0" + tempId);
        } else if (tempId <= 9999) {
            $("#order-id").val("OID-" + tempId);
        }
    }
}

