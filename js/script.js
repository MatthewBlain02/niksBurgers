function addToCart(item){
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
newOrder.innerHTML += 'Milkshake';
newOrder.appendChild(br);

for (let i = 0; i < itemForm.milkshake.length;i++){
    if (itemForm.milkshake[i].checked === true){
        newOrder.innerHTML += itemForm.milkshake[i].value;
    }
}
cart.appendChild(newOrder);
let price = parseFloat(itemForm.price.innerHTML);
totalCart(price)
}
function clearCart(){
    let cart = document.getElementById('cart');
    let total = document.getElementById('total');
    total.innerHTML = '0';
    cart.innerHTML = '';

}
function totalCart(price){
    let total = document.getElementById('total');
    let totalNum = parseFloat(total.innerHTML);
    let newTotal = totalNum + price;
    total.innerHTML = newTotal.toString();
}
