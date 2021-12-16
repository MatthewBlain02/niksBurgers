localStorage.setItem('name-John Smith','John Smith');
localStorage.setItem('email-John Smith','johnsmith@test.ie');
localStorage.setItem('password-John Smith','password');
localStorage.setItem('address-John Smith','123 Main Street');
localStorage.setItem('phone-John Smith','0861234567');
window.onload = function checkedLogged(){
    if(localStorage.getItem('logged') === '1'){
        changeNav('log');
        fillDashboard();
    }
}
function addToCart(item){
    let itemCounter = document.getElementById('totalItemsInCart');
    let itemCounterInt = parseInt(itemCounter.innerHTML);
    if(itemCounterInt == 5){
        alert('Sorry Due To High Popularity We Can Only Allow You To Order A Max Of 5 Items Per Order');
    }
    else{
        let cart = document.getElementById('cart');
        let itemForm = document.getElementById(item+'-form');
        let br = document.createElement('br');
        itemForm.itemName = document.getElementById(item+'-itemName');
        itemForm.price = document.getElementById(item+'-price');
        itemForm.orderDetails = document.getElementsByName(item+'-item');
        itemForm.milkshake = document.getElementsByName(item+'-milkshake');
        let newOrder = document.createElement('div');
        newOrder.classList.add('m-3');
        newOrder.innerHTML = itemForm.itemName.innerHTML;
        newOrder.appendChild(br);
        newOrder.innerHTML += "Order Details";
        newOrder.appendChild(br);
        for(let i = 0; i < itemForm.orderDetails.length;i++){
            if (itemForm.orderDetails[i].checked === true){
                newOrder.innerHTML += itemForm.orderDetails[i].value;
                newOrder.appendChild(br);

            }
        }
        newOrder.appendChild(br);
        newOrder.appendChild(br);

        for (let i = 0; i < itemForm.milkshake.length;i++){
            if (itemForm.milkshake[i].checked === true){
                newOrder.innerHTML += itemForm.milkshake[i].value;
            }
        }
        cart.appendChild(newOrder);
        let price = parseFloat(itemForm.price.innerHTML);
        totalCart(price)
        localStorage.setItem("cart",cart.innerHTML);
    }

}

function clearCart(){
   let cart = document.getElementById('cart');
    let total = document.getElementById('total');
    let itemCount = document.getElementById('totalItemsInCart');
    cart = null;
    total = null;
    itemCount = '0';
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTotal');


}
function totalCart(price){
    let itemCounter = document.getElementById('totalItemsInCart');
    let itemCounterInt = parseInt(itemCounter.innerHTML);
    itemCounterInt++
    let total = document.getElementById('total');
    let totalNum = parseFloat(total.innerHTML);
    let newTotal = totalNum + price;
    total.innerHTML = newTotal.toString();
    itemCounter.innerHTML = itemCounterInt.toString();
    localStorage.setItem('cartInt',itemCounter.innerText);
    localStorage.setItem('cartTotal', total.innerHTML);
}
function showCustomerInfo(){
    let cart = document.getElementById('checkout-cart-div').style.display = 'none';
    let payment = document.getElementById('payment').style.display = 'none';
    let customerInfo = document.getElementById('customer-information').style.display = 'block';
}
function changeForm(type){
    if(type === 'log'){
        document.getElementById('sign-up-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }
    else if(type === 'reg'){
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('sign-up-form').style.display = 'block';
    }
}
function saveDetails(){
    let name = document.getElementById('signup-name').value;
    let password = document.getElementById('sign-up-password').value;
    let email = document.getElementById('sign-up-email').value;
    let address = document.getElementById('sign-up-address').value;
    let phone = document.getElementById('sign-up-phone').value;
    localStorage.setItem('name-'+name,name);
    localStorage.setItem('email-'+name,email);
    localStorage.setItem('password-'+name,password);
    localStorage.setItem('address-'+name,address);
    localStorage.setItem('phone-'+name,phone);
    alert('Thank You For Signing Up To Niks Burgers');
    changeForm('log');
}
function login(){
    let name = document.getElementById('login-name').value;
    let password = document.getElementById('login-password').value;
    if(localStorage.getItem('name-'+name) != null){
        if(localStorage.getItem('password-'+name) === password){
            localStorage.setItem('name',localStorage.getItem('name-'+name));
            localStorage.setItem('logged','1');
            changeForm('reg');
            alert('Hello ' + name + ' Welcome Back');
        }
        else{
            alert('Incorrect Password Given');
            password.value = '';
        }
    }
    else {
        alert('Name Not Found Please Sign Up');
        changeForm('reg');
    }
}
function changeNav(type){
    if(type === 'log'){

            document.getElementById('signup-login').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            document.getElementById('logout').style.display = 'block';
            localStorage.setItem('logged','1');


    }
    else if(type === 'out'){

            document.getElementById('signup-login').style.display = 'block';
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('logout').style.display = 'none';
            localStorage.setItem('logged','0');
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('address');
            localStorage.removeItem('phone');
            window.location.href = 'index.html';


    }
}
function completeOrder(){
    let name = document.getElementById('customer-info-name').value;
    let address = document.getElementById('customer-info-address').value;
    let cardDetails = document.getElementById('payment-info-card').value;
    clearCart();
    alert('Order Confirmed'+name+', Payment Received From Card ' + cardDetails + ' And Will Be Delivered To '+address);
    window.location.href = 'order.html'


}
function fillDashboard(){
    let name = localStorage.getItem('name');
        document.getElementById('dashboard-name').value = name;
        document.getElementById('dashboard-email').value = localStorage.getItem('email-'+name);
        document.getElementById('dashboard-password').value = localStorage.getItem('password-'+name);
        document.getElementById('dashboard-address').value = localStorage.getItem('address-'+name);
        document.getElementById('dashboard-phone').value = localStorage.getItem('phone-'+name);
        document.getElementById('dashboard-card').value = localStorage.getItem('card-'+name);
        document.getElementById('dashboard-nameOnCard').value = localStorage.getItem('nameOnCard-'+name);

}
function updateDetails(){
    let name = document.getElementById('dashboard-name').value;
    let email = document.getElementById('dashboard-email').value;
    let password = document.getElementById('dashboard-password').value;
    let address = document.getElementById('dashboard-address').value;
    let phone = document.getElementById('dashboard-phone').value;
    let card = document.getElementById('dashboard-card').value;
    let nameOnCard = document.getElementById('dashboard-nameOnCard').value;
    let checkPassword = prompt('Please Enter Current Password');
    let currentPassword = localStorage.getItem('password-'+name);
    if(checkPassword === currentPassword){
        localStorage.setItem('name-'+name,name);
        localStorage.setItem('name',name);
        localStorage.setItem('email-'+name,email);
        localStorage.setItem('password-'+name,password);
        localStorage.setItem('address-'+name,address);
        localStorage.setItem('phone-'+name,phone);
        localStorage.setItem('card-'+name,card);
        localStorage.setItem('nameOnCard-'+name,nameOnCard);
        alert('Details Uploaded');
    }
    else{
        alert('Incorrect Password Entered')
    }
}