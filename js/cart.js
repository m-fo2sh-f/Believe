

window.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    let container = document.getElementById('cart-container');

    if (cart.length === 0) {
        container.innerHTML = `<p class="no-items">You didn't add items to cart yet</p>`;
        return;
    }
    var total = 0
    cart.forEach((item, index) => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');

        total = total + item.price
        productDiv.innerHTML = `
            <img src="${item.image}" width="100">
            <div class="data">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-price">${item.price}</p>
            </div>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        container.appendChild(productDiv);

    });
    console.log(total)


    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-item')) {
            let index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cart));
            location.reload();
        }
    });
});
