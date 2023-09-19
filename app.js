const fa = document.querySelectorAll(".faqs");

fa.forEach((faqs) => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    });
});


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 2, 
      loop: true, 
      autoplay: true, 
      autoplayTimeout: 3000, 
      nav: true, 
      dots: true 
    });
  });
  