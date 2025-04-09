const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navigationLink = document.querySelector(".navigation-link");

openMenu.addEventListener("click", () =>{
    navigationLink.style.opacity = "1";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
    navigationLink.style.opacity = "0";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
});

// =========================link button================
const linkButton = document.querySelectorAll('.btn_one');
linkButton.forEach((btn ) => {
    btn.addEventListener('click', () => {
        linkButton.forEach( btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    });
});

// ===============================accordion====================

const faqCard = document.querySelectorAll('.faq-card');

faqCard.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});

// ===================== btn overflow===========================


window.onscroll = function(){
    scrollbarNavigation();
};
function scrollbarNavigation(){
    const slideOneBtn = document.querySelector(".slideOne-btn");

    if(document.body.scrollTop > 40 || document.documentElement.scrollTop >40){
        slideOneBtn.style.top = "-68px";
    }else{
        slideOneBtn.style.top = ""
    }
};

// =====================more btn===========================
const moreBtn = document.querySelector(".more-btn");
const moreImageGallery = document.querySelector(".more-image-gallery");

moreBtn.addEventListener("click", () => {
    moreImageGallery.style.display = "block";
    moreBtn.style.opacity = "0";
});



