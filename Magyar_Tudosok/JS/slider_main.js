const buttons = document.querySelectorAll(".slider__button");
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].onclick = () => {
        showNews(i);
    }
};

function showNews(index) {
    const cim = document.querySelector(".cim");
    const alcim = document.querySelector(".alcim");
    const kep = document.querySelector(".kep");
    const leiras = document.querySelector(".leiras");

    let title = news[index].title;
    let subtitle = news[index].subtitle;
    let image = news[index].image;
    let description = news[index].description;
    
    cim.innerHTML = title;
    alcim.innerHTML = subtitle;
    kep.innerHTML = image;
    leiras.innerHTML = description;
}

let newSwiper = new Swiper(".slider-swiper", {
    slidesPerView: 3,
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
          el: ".swiper-pagination",
          
        },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});