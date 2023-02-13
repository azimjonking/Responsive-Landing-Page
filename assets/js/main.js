

/*================ TEAM SWIPER ================== */

var testimonial__swiper = new Swiper(".testimonials__swiper", {
    slidesPerView: "auto",
    centerSlides: true,
    spaceBetween: 32,
    loop: true,
});

/*================ FAQ's ACCORDION ================== */
let accordion = document.querySelector(".accordion__content");
let header = accordion.querySelectorAll(".accordion__header");
let item = accordion.querySelectorAll(".accordion__item");

header.forEach(headers =>
    headers.addEventListener("click", toggleAccordion));
    function toggleAccordion()
    {
        thisItem = this.parentNode;
        item.forEach(items => {
            if(thisItem == items)
            {
                thisItem.classList.toggle('collapsed');
                return;
            }
            items.classList.remove('collapsed');
        })
    }