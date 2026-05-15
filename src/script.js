const productInput = document.getElementById('productInput');
const addButton = document.getElementById('addButton');
const productList = document.getElementById('productList');
const cartlist = document.getElementById('cartList');
const priceInput = document.getElementById('priceInput');

let cart = [];

addButton.addEventListener('click', addToCart);

function addToCart() {
    //lägga till object i array
    //object bestpr av input värden

    const productName = productInput.value
    const productPrice = Number(priceInput.value)

    const newProduct = {
        name: productName,
        price: productPrice,
        quantity: 1,
    }

    let itemexists = false;

    for (const item of cart) {
        if (item.name === productName) {
            item.quantity++;
            itemexists = true;
        }
    }

    if (!itemexists) {
        cart.push(newProduct);
    }

    productInput.value = '';
    priceInput.value = '';

   renderCart();
}

function renderCart() {
    cartlist.innerHTML = '';
    for (const item of cart) {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}kr (x${item.quantity})`;
        cartlist.appendChild(li);
    }
}

addButton.addEventListener('click', () => {
});