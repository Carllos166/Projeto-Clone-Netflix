$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true, /* mostra os próximos e anteriores  botão */
    responsive:{ 
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})