//The purpose of the code below to create a shopping cart

//The variables below are capturing the most utilized html elements
let addToCartButtons = document.getElementsByClassName('btn');//buttons which are going to add products to cart
let headPhonePrice = sessionStorage.getItem("choices");//activating sessionStorage to remember which items were added to cart between page loads
let cartPrice = document.getElementById("cartPriceOutput");//the price which will be displayed on the [age]
let whatsInCart = document.getElementById("cartOutput");//the items which will be represented in the cart

//The below 2 functions style the captured html elements, we will call them later so that they can stylr the elements being generated by the js
function ItemStyler() {//how the cart items are going to look
	whatsInCart.setAttribute("style",
"height: 20px; color:white; font-family: Righteous,cursive; font-size: 20px; text-shadow: 1px 1px black; text-align: center");
}

function PriceStyler() {//how the price total is going to look
	cartPrice.setAttribute("style",
"height: 40px; color:white; font-family: Righteous,cursive; font-size: 40px; text-shadow: 2px 2px black; text-align: center; margin-top: 250px;");
}

//The code below runs on the products.html page to enable quick Add To Cart Functionality
let choices = []//make choices accept data inside an array
for (let i = 0; i < addToCartButtons.length; i++) { //loop through all of the Add to Cart buttons
    let button = addToCartButtons[i];//iterate through each Add to Cart button stored as a counting variable 
    button.addEventListener('click', function(event) { //target the event of a click
        let buttonClicked = event.target
        choices.push(parseFloat(buttonClicked.id));//convert the id (which is the price which is inside a string, refer to products.html) of the clicked Add To Cart Button into a float number and add it into the array called choices
        const reducer = (accumulator, currentValue) => accumulator + currentValue; //this function accepts two parameters which are then added to each other
        alert("Your current total is R" + choices.reduce(reducer));//take all of the numbers inside of the array and add them together and alert the user of their total
        sessionStorage.setItem("choices", choices.reduce(reducer));//set a sessionStorage variable called choices which holds the sum of the choices array

    })
}

//An Object holding each product's make, model, price and total VAT inside a string so that it can be captured inside the cart.
cansPrices = {

			    clothes1: "V-neck R380.00 (R644.25 VAT)",

			    clothes2: "Africa R250.00 (R449.85 VAT)",

			    clothes3: "Kapi R400.00 (R1198.50 VAT)",

			    clothes4: "Formal R600.00 (R600.00 VAT)",

			    clothes5: "Fiasco R560.00 (R405.00 VAT)",

			    clothes6: "Nice R530.00 (R210.00 VAT)"


}

/*Each product has it's details set as per the above Can's Prices object as well as it's own sessionStorage 
			variable to allow it to be added to the cart and remembered between page loads*/

function addCan1ToCart() {

    let cartCan1 = cansPrices.can1;
    sessionStorage.setItem("cartCan1", cartCan1);

}

function addCan2ToCart() {

    let cartCan2 = cansPrices.can2;
    sessionStorage.setItem("cartCan2", cartCan2);
}

function addCan3ToCart() {

    let cartCan3 = cansPrices.can3;
    sessionStorage.setItem("cartCan3", cartCan3);
}

function addCan4ToCart() {

    let cartCan4 = cansPrices.can4;
    sessionStorage.setItem("cartCan4", cartCan4);
}

function addCan5ToCart() {

    let cartCan5 = cansPrices.can5;
    sessionStorage.setItem("cartCan5", cartCan5);
}

function addCan6ToCart() {

    let cartCan6 = cansPrices.can6;
    sessionStorage.setItem("cartCan6", cartCan6);
}

//The below function runs as soon as the shopping_cart.html body loads
function getCart() {
	/*	For each headphone, a sessionStorage variable was created if the item was added to cart,
		the if statement tests if the sessionStorage variable was initially created (!= null), and if it is then
		retrieves the sessionStorage variable and appends it as a paragraph to the selected element. The function
		called underneath styles the cart element.
	*/ 
    if (sessionStorage.getItem("cartCan1") != null) { 
         let cartItem1 = document.createElement("p"); 
         whatsInCart.appendChild(cartItem1); 
         cartItem1.innerHTML = sessionStorage.getItem("cartCan1");
         ItemStyler();
    }

    if (sessionStorage.getItem("cartCan2") != null) {
         let cartItem2 = document.createElement("p");
         whatsInCart.appendChild(cartItem2);
         cartItem2.innerHTML = sessionStorage.getItem("cartCan2");
         ItemStyler();
    }

    if (sessionStorage.getItem("cartCan3") != null) {
         let cartItem3 = document.createElement("p");
         whatsInCart.appendChild(cartItem3);
         cartItem3.innerHTML = sessionStorage.getItem("cartCan3");
         ItemStyler();
    }

    if (sessionStorage.getItem("cartCan4") != null) {
         let cartItem4 = document.createElement("p");
         whatsInCart.appendChild(cartItem4);
         cartItem4.innerHTML = sessionStorage.getItem("cartCan4");
         ItemStyler();
    }

    if (sessionStorage.getItem("cartCan5") != null) {
         let cartItem5 = document.createElement("p");
         whatsInCart.appendChild(cartItem5);
         cartItem5.innerHTML = sessionStorage.getItem("cartCan5");
         ItemStyler();
    }

    if (sessionStorage.getItem("cartCan6") != null) {
         let cartItem6 = document.createElement("p");
         whatsInCart.appendChild(cartItem6);
         cartItem6.innerHTML = sessionStorage.getItem("cartCan6");
         ItemStyler();
    }

    if (sessionStorage.getItem("choices") != null) { //If the session variable "choices" is NOT equal to null (meaning is HAS been assigned),
         let choicesTotal = document.createElement("p");// grab the selected html element and append the price of the headphones added to cart
     	 cartPrice.appendChild(choicesTotal);
         choicesTotal.innerHTML = "Total: R" + headPhonePrice;// Update the price displayed with the new price/ or load the price for the first time
         PriceStyler();//Style the proce displayed

    } else { //Should the cart be empty, display the following message in a pragraph that is appended to the selected ID
        let empty = document.createElement("p");
        empty.innerHTML = "Your Cart is currently empty";
        whatsInCart.appendChild(empty);
        ItemStyler();//Style the innerHTML
        $("#orderOptions").hide();//hide() function utilized to hide collect or deliver radio buttons as nothing is in the cart yet
        $(".firstBigHeading").hide();//hide() function utilized to hide the order intro heading as nothing is in the cart yet
    }								

}

//variables which are going to do the math for either the delivery or collectio on the sessionStorage variable:
let collectSum = parseFloat(sessionStorage.getItem("choices")) + 15.00;//convert the sessionStorage variable into a float(number) and add 15.00 to it
let deliverSum = parseFloat(sessionStorage.getItem("choices")) + 180.00;//convert the sessionStorage variable into a float(number) and add 180.00 to it

//as soon as the collect radio button is clicked, the rest of the collect form is shown and the price is ammended and styled
function showCollectForm() {
	
			document.getElementById("collectChoice").style.display = "inline";
    		cartPrice.innerHTML = "Total: R" + collectSum + " (R25.00 charge for collection has been added)";
    		PriceStyler();
	   }
   
//as soon as the delivery radio button is clicked, the rest of the delivery form is shown and the price is ammended and styled
function showDeliverForm() {
			
				document.getElementById("deliverChoice").style.display = "inline";
    			cartPrice.innerHTML = "Total: R" + deliverSum + " (R200.00 charge for delivery has been added)";
    			PriceStyler();
			 }
			

//Discount applied against the coupon (10%)
$('#submit').click(function() { //when the submit button is clicked run the following function:
   let input = $('#coupon').val();//place user coupon input's value into a variable
    if (input === "thisisthe10%" && document.getElementById("collect").checked) {//if the input was exactly equal to "thisisthe10%" and the collect option was checked, run this:
        alert("Correct Coupn code! Your 10% discount will be applied");//alert the user that the coupon code was correct
        let discountSum = (collectSum - 0.10 * collectSum);// 10% is subtracted off of the price which includes delivery fee
        let discountTotal = discountSum.toFixed(2);//toFixed(2), helps cents display properly with 2 decimal places, so R1.60 instead of R1.6
        cartPrice.innerHTML = "Discounted Total: R" + discountTotal;//update the Total Price Output
        PriceStyler();
    }
    if (input === "thisisthe10%" && document.getElementById("deliver").checked) {//if the correct coupon code was submitted and the delivery fee was added, do the below:
        alert("Correct Coupon code! Your 10% discount will be applied");////alert the user that the coupon code was correct
        let discountSum = (deliverSum - 0.10 * deliverSum); // 10% is subtracted off of the price which includes delivery fee
        let discountTotal = discountSum.toFixed(2);
        cartPrice.innerHTML = "Discounted Total: R" + discountTotal;
        PriceStyler();
    }

    if (input !== "thisisthe10%" && document.getElementById("collect").checked) {//the user has checked the collect option but the coupon code is incorrect
        alert("Incorrect Coupon Code. Please try again.");//alert the user that the coupon code was wrong
    }
    if (input !== "thisisthe10%" && document.getElementById("deliver").checked) {//the user has checked the delivery option but the coupon code is incorrect
        alert("Incorrect Coupon Code. Please try again.");//alert the user that the coupon code was wrong
    }
});

 /* “confirm order” button which alerts the user that their order was
successful and generates them a reference number*/

function confirmIt() {//this function is run on the click of the confirm order button which is on the shopping_cart.html page
	
    alert("Congratulations! You have purchased amazing quality!" + "\n" +
        "Here is your Reference Number: " + "\n" + Math.random().toString(36).substr(2, 9));//this generates a random reference number every time
}


$(document).ready(function loadFunction() { //functions which run on load
    $("#who, #vision").slideUp(4000).slideDown(4000);//Jquery chained effects on about page
    $("#vision, #vision").animate({//animations
        opacity: '1.0',
        marginLeft: "0.6in"
    })

});
//Jquery drop-down menu.
function dropDown() {
    $(".promise").slideDown(2000);
}










