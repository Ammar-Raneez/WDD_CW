function addToCart() {
    var itemnum1 = document.getElementById("number1").value;
    var totalprice1 = 930 * itemnum1;
    var item1 = document.getElementById("camera1").innerHTML;

    var itemnum2 = document.getElementById("number2").value;
    var totalprice2 = 6499 * itemnum2;
    var item2 = document.getElementById("camera2").innerHTML;

    var itemnum3 = document.getElementById("number3").value;
    var totalprice3 = 1799 * itemnum3;
    var item3 = document.getElementById("camera3").innerHTML;

    var itemnum4 = document.getElementById("number4").value;
    var totalprice4 = 1999 * itemnum4;
    var item4 = document.getElementById("camera4").innerHTML;

    var itemnum5 = document.getElementById("number5").value;
    var totalprice5 = 99 * itemnum5;
    var item5 = document.getElementById("lens1").innerHTML;

    var itemnum6 = document.getElementById("number6").value;
    var totalprice6 = 320 * itemnum6;
    var item6 = document.getElementById("lens2").innerHTML;

    var itemnum7 = document.getElementById("number7").value;
    var totalprice7 = 1370 * itemnum7;
    var item7 = document.getElementById("lens3").innerHTML;

    var itemnum8 = document.getElementById("number8").value;
    var totalprice8 = 1460 * itemnum8;
    var item8 = document.getElementById("lens4").innerHTML;

    var itemnum9 = document.getElementById("number9").value;
    var totalprice9 = 750 * itemnum9;
    var item9 = document.getElementById("lens5").innerHTML;

    var itemnum10 = document.getElementById("number10").value;
    var totalprice10 = 1700 * itemnum10;
    var item10 = document.getElementById("lens6").innerHTML;

    var itemnum11 = document.getElementById("number11").value;
    var totalprice11 = 85 * itemnum11;
    var item11 = document.getElementById("accessories1").innerHTML;

    var itemnum12 = document.getElementById("number12").value;
    var totalprice12 = 70 * itemnum12;
    var item12 = document.getElementById("accessories2").innerHTML;

    var itemnum13 = document.getElementById("number13").value;
    var totalprice13 = 450 * itemnum13;
    var item13 = document.getElementById("accessories3").innerHTML;

    var itemnum14 = document.getElementById("number14").value;
    var totalprice14 = 85 * itemnum14;
    var item14 = document.getElementById("accessories4").innerHTML;

    var itemnum15 = document.getElementById("number15").value;
    var totalprice15 = 93 * itemnum15;
    var item15 = document.getElementById("accessories5").innerHTML;

    var itemnum16 = document.getElementById("number16").value;
    var totalprice16 = 175 * itemnum16;
    var item16 = document.getElementById("accessories6").innerHTML;


    var totalprice = totalprice1 + totalprice2 + totalprice3 + totalprice4 + totalprice5 + totalprice6 + totalprice7
    + totalprice8 + totalprice9 + totalprice10 + totalprice11 + totalprice12 + totalprice13 + totalprice14 + totalprice15 
    + totalprice16;

    var customerName = document.getElementById("fname");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var addressRegex =/^[#.0-9a-zA-Z\s,-]+$/;
    var emailRegex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8}?$)/;  //email regex for further validations

    if(customerName.value.trim() == "") {
        alert("Please enter your Name");
    }else if(email.value.trim()=="") {
        alert("Please enter your Email");
    }else if(!emailRegex.test(email.value)) {
        alert("Please enter a valid email");
    }else if(address.value.trim()=="") {
        alert("Please enter your Address");
    }else if(!addressRegex.test(address.value)) {
        alert("Please enter a valid Address")
    }else if(city.value.trim()=="") {
        alert("Please enter your City");
    }else if(totalprice==0) {
        alert("Please purchase an item from us :'(")
    }else {
        alert("Dear " + customerName.value + ", you have ordered " + itemnum1 + " of " + item1 +
            "\nYou have ordered " + itemnum2 + " of " + item2 + 
            "\nYou have ordered " + itemnum3 + " of " + item3 +
            "\nYou have ordered " + itemnum4 + " of " + item4 +
            "\nYou have ordered " + itemnum5 + " of " + item5 +
            "\nYou have ordered " + itemnum6 + " of " + item6 +
            "\nYou have ordered " + itemnum7 + " of " + item7 +
            "\nYou have ordered " + itemnum8 + " of " + item8 +
            "\nYou have ordered " + itemnum9 + " of " + item9 +
            "\nYou have ordered " + itemnum10 + " of " + item10 +
            "\nYou have ordered " + itemnum11 + " of " + item11 +
            "\nYou have ordered " + itemnum12 + " of " + item12 +
            "\nYou have ordered " + itemnum13 + " of " + item13 +
            "\nYou have ordered " + itemnum14 + " of " + item14 +
            "\nYou have ordered " + itemnum15 + " of " + item15 +
            "\nYou have ordered " + itemnum16 + " of " + item16 +
            "\nYour total price is $" + totalprice
        );
    }
}

var form = document.getElementById("merch-form");
form.addEventListener('submit', e=>{
    e.preventDefault();
    addToCart();
});