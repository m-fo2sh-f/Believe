window.addEventListener("DOMContentLoaded", () => {

    let addToCart = document.querySelector('.add-to-cart');
    let added = document.querySelector('.item-added');
    document.querySelector('.add-to-cart').addEventListener('click', () => {
        added.style.transform = 'scale(1) translateX(-50%)'
        setTimeout(() => {
            added.style.transform = 'scale(0)'
        }, 2000);

        let salaryNode = document.querySelector('.salary').lastChild;
        let salaryText = salaryNode.textContent.trim();
        let itemImg = document.querySelector('.imgSrc').src;
        let itemName = document.querySelector('.sub-left-side .top p:first-child').textContent.trim();

        let product = {
            name: itemName,
            image: itemImg,
            price: salaryText
        };
        // هات الكارت القديم
        let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        // زوّد المنتج الجديد
        cart.push(product);
        // خزّن الكارت تاني
        localStorage.setItem('cartItems', JSON.stringify(cart));
    });





    let imgSrc = document.querySelector('.imgSrc');
    let img = sessionStorage.getItem('imgPath');
    imgSrc.src = img;


    let ret = document.getElementById('return')
    let retContent = document.getElementById('return-content')
    let retState = false

    ret.addEventListener('click', () => {
        if (retState === false) {
            retContent.style.maxHeight = '500px';
            retState = !retState
        } else {
            retContent.style.maxHeight = '0';
            retState = !retState
        }
    })
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', event => {
            event.preventDefault();
            let clickedCard = event.target.closest('.card');
            let img = clickedCard.querySelector('.img');
            let styles = window.getComputedStyle(img);
            let bg = styles.backgroundImage;
            let match = bg.match(/url\(["']?(.*?)["']?\)/);
            let path = match ? match[1] : null;
            sessionStorage.setItem("imgPath", path);
            window.location.href = "/pages/item-page.html";
        });
    });


})