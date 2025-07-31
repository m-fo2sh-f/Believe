document.addEventListener("DOMContentLoaded", function () {

    // ---------------------------------------
    // ---------------|1|header------------------------------------------------------
    // ---------------------------------------

    // ---------------1-nav1---------------
    let nav1Notf = document.querySelector('.leftsub-nav1')
    let notfIcon = document.getElementById('nav1-icon-remove')
    notfIcon.addEventListener('click', () => { nav1Notf.style.display = "none" })

    // ---------------2-nav2---------------
    let btnNav2 = document.getElementById('menubtn-nav2');
    let menuNav2 = document.getElementById('menucont-nav2');
    let btnState2 = true;
    if (btnNav2) {
        btnNav2.addEventListener('click', () => {
            menuNav2.style.maxHeight = btnState2 ? "700px" : '0';
            nav3.style.marginTop = btnState2 ? "600px" : '0';
            btnState2 = !btnState2;
        });
    }

    // ---------------3-nav3---------------
    let btnNav3 = document.getElementById('menubtn-nav3');
    let nav3 = document.getElementById('nav3');
    let menuNav3 = document.getElementById('menucont-nav3');
    let btnState3 = true;
    if (btnNav3) {
        btnNav3.addEventListener('click', () => {
            menuNav3.style.maxHeight = btnState3 ? "700px" : '0';
            menuNav3.style.paddingBottom = btnState3 ? "40px" : '0';
            btnState3 = !btnState3;
        });
    }
    // ---------------3.1-nav3-sub-menu---------------
    let men = document.querySelector('.men');
    let menu1 = document.querySelector('.hamasa');
    men.addEventListener('mouseenter', () => {
        console.log('hover')
        menu1.style.maxHeight = '450px'
    })
    men.addEventListener('mouseleave', () => {
        console.log('hover')
        menu1.style.maxHeight = '0px'
    })
})