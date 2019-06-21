$(document).ready(function(){


        $('.hamburger').click(function () {
            $('.main_menu').toggleClass('open');
            $('html').toggleClass('page-noscroll');

            $('.main_menu .mm_close').click(function () {
                $('.main_menu').removeClass('open');
                $('html').removeClass('page-noscroll');
            });
            return false;
        });
        $(document).on('click', function(e) {
            if (!$(e.target).closest(".main_menu.open").length) {
                $(".main_menu.open").removeClass('open');
                $("html").removeClass('page-noscroll');
            }
            e.stopPropagation();
        });


        $('.main_menu .arrow').click(function(){
            $(this).toggleClass('rotate');
            $(this).next().slideToggle();
        });


    if($('.main_slider .slider_item').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            fade:true,
            infinite:false,
            //speed: 1000,
            //autoplay: true,
            //autoplaySpeed: 2000,
        });
    }


    $('.ms_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });

    $('.ms_next').click(function(){
        $('.main_slider').slick('slickNext');
    });



    if($(".categories_slider .slider_item").length >6){
        $('.categories_slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            infinite:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },

                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    $('.filter_item').each(function(){
        var filter_head=$(this).find('.filter_head');
        var filter_body=$(this).find('.filter_body');
        var filter_item=$(this);
        $(filter_head).click(function(){
            $('.filter_item').removeClass('b_0 active');
            $('.filter_body').slideUp();
            if($(filter_body).is(':visible')){
                $(filter_body).slideUp();
                $(filter_item).removeClass('active');
                $(filter_item).prev().removeClass('b_0');
            }else{
                $(filter_body).slideDown();
                $(filter_item).addClass('active');
                $(filter_item).prev().addClass('b_0');
            }
        });
    });


    var news_grid=$('.news_grid');
    if(news_grid){
        $(news_grid).masonry({
            itemSelector: '.grid-item',
        });
    }



    $('.product_main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //fade: true,
        asNavFor: '.product_slider_nav'
    });

    $('.product_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        vertical:true,
        asNavFor: '.product_main_slider',
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    vertical:false,
                }
            }
        ]
    });




});


