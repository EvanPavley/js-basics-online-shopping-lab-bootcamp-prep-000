var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  var itemObj = {itemName: item, itemPrice: price};
  cart.push(itemObj)
  return(`${item} has been added to your cart.`);
}

function viewCart() {
  const yourCart = []
  
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  for (let i = 0, l = cart.length; i < l; i++) {
    yourCart.push( `${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
   if (cart.length === 1){
  return ('In your cart, you have ' + yourCart.join(',') + '.');
  }
  if (cart.length > 3){
  return ('In your cart, you have ' + yourCart.join(', and ') + '.');
  }
  if (cart.length <= 3){
  yourCart[yourCart.length-1]= "and "+yourCart[yourCart.length-1];
  return ('In your cart, you have ' + yourCart.join(', ') + '.');
  }
}

function total() {
  const cartPrices= []
  var totalCost = 0
  
  for (let i = 0, l = cart.length; i < l; i++) {
    cartPrices.push(cart[i].itemPrice)
  }
  for (let i = 0, l = cartPrices.length; i < l; i++) {
    totalCost = cartPrices[i] += totalCost
  }
  return totalCost
}

function removeFromCart(item) {
  let itemInCart = false
    
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].itemName === item){
      itemInCart = true
      cart.splice([i], 1)
      return cart
    }
  }
  if (!itemInCart){
    return "That item is not in your cart.";
  }
}

function total() { 
  return total();
}

function placeOrder(cardNumber) {
  if (cardNumber){
    cart =[];
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }else{
    return "Sorry, we don't have a credit card on file for you."
  }
}
