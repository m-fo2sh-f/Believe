document.addEventListener("DOMContentLoaded", function () {

    // ---------------4-slider---------------
    let slide1 = document.querySelector('.slide1')
    let slide2 = document.querySelector('.slide2')
    let sliderState = 'slide2'
    setInterval(() => {
        if (sliderState === 'slide1') {
            slide1.style.display = 'none';
            slide2.style.display = 'block';
            sliderState = 'slide2';
        } else {
            slide2.style.display = 'none';
            slide1.style.display = 'block';
            sliderState = 'slide1';
        }
    }, 6000)
    // ---------------------------------------
    // ---------------|2|main---------------------------------------------------------------
    // ---------------------------------------

    // ---------------1-items-nav---------------
    let navlinks = document.querySelectorAll('.items-nav li');
    let feat = document.getElementById('featured');
    let arri = document.getElementById('new-arrivals');
    let bestse = document.getElementById('best-seller');
    let conFeat = document.querySelector('.featured');
    let conArri = document.querySelector('.new-arrivals');
    let conBestse = document.querySelector('.best-seller');

    navlinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navlinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    feat.addEventListener('click', () => {
        conFeat.style.display = "block";
        conArri.style.display = "none";
        conBestse.style.display = "none";
    });
    arri.addEventListener('click', () => {
        conArri.style.display = "block";
        conFeat.style.display = "none";
        conBestse.style.display = "none";
    });
    bestse.addEventListener('click', () => {
        conFeat.style.display = "none";
        conArri.style.display = "none";
        conBestse.style.display = "block";
    });
    // ---------------2-brands-slider---------------
    let slider = document.querySelector('.brands_logo .slider');
    let x = 0
    setInterval(() => {
        if (x == 1325) {
            x = 0;
            slider.style.transform = `translateX(-${x}px)`;
        } else {
            slider.style.transform = `translateX(-${x + 265}px)`;
            x = x + 265;
        }
    }, 2500)
    //------------------------3-cards-img-url--------------------------------
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
});
















