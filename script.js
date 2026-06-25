let cart = [];

const cartItems =
document.getElementById("cart-items");

const cartCount =
document.getElementById("cart-count");

const totalPrice =
document.getElementById("total-price");

const cartSidebar =
document.getElementById("cart-sidebar");

const cartBtn =
document.getElementById("cart-btn");

const closeCart =
document.getElementById("close-cart");


cartBtn.addEventListener("click", () => {
    cartSidebar.classList.add("show");
});

closeCart.addEventListener("click", () => {
    cartSidebar.classList.remove("show");
});


document
.querySelectorAll(".add-cart")
.forEach(button => {

    button.addEventListener("click", () => {

        const name =
        button.dataset.name;

        const price =
        Number(button.dataset.price);

        cart.push({
            name,
            price
        });

        updateCart();

    });

});


function updateCart(){

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">

            <p><strong>${item.name}</strong></p>

            <p>₹${item.price}</p>

            <button
            class="remove-btn"
            onclick="removeItem(${index})">
            Remove
            </button>

        </div>
        `;
    });

    cartCount.textContent = cart.length;

    totalPrice.textContent = total;
}


function removeItem(index){

    cart.splice(index,1);

    updateCart();

}