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
    total.innerHTML = '0';
    cart.innerHTML = '';
    itemCount.innerHTML = '0';
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
    localStorage.setItem('cartTotal', total.innerHTML);
}
window.onload = function GetCart(){
    let checkoutCart = document.getElementById('checkout-cart').innerHTML = localStorage.getItem('cart');
    let checkoutTotal = document.getElementById('checkout-total').innerHTML = localStorage.getItem('cartTotal');

}
function showCustomerInfo(){
    let cart = document.getElementById('checkout-cart-div').style.display = 'none';
    let payment = document.getElementById('payment').style.display = 'none';
    let customerInfo = document.getElementById('customer-information').style.display = 'block';
}
