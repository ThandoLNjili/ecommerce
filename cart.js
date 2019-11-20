var addToCart = document.getElementsByClassName('btn');
var price = sessionStorage.getItem('choices');
var totalPrice = document.getElementById('cartTotal');
var cartContent = document.getElementById('cartContent');

var choices = [];
for (var i = 0; i < addToCart.length; i++) {
    var button = addToCart[i];
    button.addEventListener('click', function(e) {
        var clicked = e.target;
        choices.push(parseFloat(clicked.id));
        const reducer = (acc, cv) => acc + cv;
        alert(`Your current total is R${choices.reduce(reducer)}`);
        sessionStorage.setItem("choices", choices.reduce(reducer));
    })
}

prodPrices = {
    device1: "iPhone 11 Pro Max R23999 (R3130.30 VAT)",
    device2: "iPhone 11 Pro R21999 (R2869.43 VAT)",
    device3: "iPhone 11 R14999 (R1956.39 VAT)",
    device4: "iPhone XS R18999 (R2478.13 VAT)",
    device5: "iPhone 8 R9999 (R1304.21 VAT)",
    device6: "iPhone 7 R7999 (R1043.35)"
}

function addToCart1() {
    var device1 = prodPrices.device1;
    sessionStorage.setItem("device1", device1);
}

function addToCart2() {
    var device2 = prodPrices.device2;
    sessionStorage.setItem("device2", device2);
}

function addToCart3() {
    var device3 = prodPrices.device3;
    sessionStorage.setItem("device3", device3);
}

function addToCart4() {
    var device4 = prodPrices.device4;
    sessionStorage.setItem("device4", device4);
}

function addToCart5() {
    var device5 = prodPrices.device5;
    sessionStorage.setItem("device5", device5);
}

function addToCart6() {
    var device6 = prodPrices.device1;
    sessionStorage.setItem("device6", device6);
}

function addCart() {
    if (sessionStorage.getItem("device1") != null) {
        var cartItem1 = document.createElement("p");
        cartItem1.innerHTML = sessionStorage.getItem("device1");
        cartContent.appendChild(cartItem1);
        
        document.getElementById('collection').style.display = "none";
        document.getElementById('delivery').style.display = "none";
    }

    if (sessionStorage.getItem("device2") != null) {
        var cartItem2 = document.createElement("p");
        cartItem2.innerHTML = sessionStorage.getItem("device2");
        cartContent.appendChild(cartItem2);
        
        document.getElementById('collection').style.display = "none";
        document.getElementById('delivery').style.display = "none";
    }

    if (sessionStorage.getItem("device3") != null) {
        var cartItem3 = document.createElement("p");
        cartItem3.innerHTML = sessionStorage.getItem("device3");
        cartContent.appendChild(cartItem3);
        document.getElementById('collection').style.display = "none";
        document.getElementById('delivery').style.display = "none";
    }

    if (sessionStorage.getItem("device4") != null) {
        var cartItem4 = document.createElement("p");
        cartItem4.innerHTML = sessionStorage.getItem("device4");
        cartContent.appendChild(cartItem4);
        document.getElementById('collection').style.display = "none";
        document.getElementById('delivery').style.display = "none";
    }

    if (sessionStorage.getItem("device5") != null) {
        var cartItem5 = document.createElement("p");
        cartItem5.innerHTML = sessionStorage.getItem("device5");
        cartContent.appendChild(cartItem5);
        document.getElementById('collection').style.display = "none";
        document.getElementById('delivery').style.display = "none";
    }

    if (sessionStorage.getItem("device6") != null) {
        var cartItem6 = document.createElement("p");
        cartItem6.innerHTML = sessionStorage.getItem("device6");
        cartContent.appendChild(cartItem6);
        document.getElementById('collection').style.display = "none";
        document.getElementById('delivery').style.display = "none";
    }

    if (sessionStorage.getItem("choices") != null) {
        let priceTotal = document.createElement("p");
        totalPrice.appendChild(priceTotal);
        priceTotal.innerHTML = `Total: R${price}`;

    } else {
        var empty = document.createElement("p");
        empty.innerHTML = "Your Cart is currently empty";
        cartContent.appendChild(empty);
        document.getElementById('orderOption').style.display = "none";
        document.getElementById('collection').style.display = "none";
        document.getElementById('delivery').style.display = "none";
    }
}

var collectTotal = parseFloat(sessionStorage.getItem("choices")) + 0.00;

var deliveryTotal = parseFloat(sessionStorage.getItem("choices")) + 180.00

function collectionForm() {
    document.getElementById("collection").style.display = "inline";
    totalPrice.innerHTML = `Total: R${collectTotal} (R0.00 collection fee)`;
}

function deliveryForm() {
    document.getElementById("delivery").style.display = "inline";
    totalPrice.innerHTML = `Total: R${deliveryTotal} (R180.00 collection fee)`;
}

function confirmOrder() {
    alert(`Congratulations! Welcome to the Sublime Tech Family \n Here is your Reference Number: ${Math.random().toString(36).substr(2, 9)}`);
}