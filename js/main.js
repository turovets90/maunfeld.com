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





    /*
        $('#search_toggler').on('click', function(){
            $('#search_block').slideDown();
        });
        $('.search_block .s_close').on('click', function(){
            $('#search_block').slideUp();
        });

        $('.main_menu .arrow').click(function(){
            $(this).toggleClass('rotate');
            $(this).next().slideToggle();
        });

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


        if($('.main_slider .slider_item').length >1){
            $('.main_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
                fade:true,
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


       // if($(".main_cat_slider .c_slider_item").length >7){
            $('.main_cat_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true,
            });
        //}


        $('.mc_prev').click(function(){
            $('.main_cat_slider').slick('slickPrev');
        });

        $('.mc_next').click(function(){
            $('.main_cat_slider').slick('slickNext');
        });




        $('.sale_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
        });

        $('.sale_prev').click(function(){
            $('.sale_slider').slick('slickPrev');
        });

        $('.sale_next').click(function(){
            $('.sale_slider').slick('slickNext');
        });


        $('.hits_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
        });

        $('.hits_prev').click(function(){
            $('.hits_slider').slick('slickPrev');
        });

        $('.hits_next').click(function(){
            $('.hits_slider').slick('slickNext');
        });


        $('.new_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
        });

        $('.new_prev').click(function(){
            $('.new_slider').slick('slickPrev');
        });

        $('.new_next').click(function(){
            $('.new_slider').slick('slickNext');
        });


        $('.product_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.product_slider_nav'
        });

        $('.product_slider_nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.product_slider',
            vertical:true,
            focusOnSelect: true
        });


        $('.catalog_nav .arrow').click(function () {
            $(this).toggleClass('act');
            $(this).next().slideToggle();
        });


        $('.catalog_title').click(function () {
            $(this).toggleClass('act');
            $('.catalog_nav').slideToggle();
        });


        $('.filter_nav li').each(function(){
            var f_item=$(this).find('.filter_item');
            var f_arrow=$(this).find('.arrow');
            var f_level2=$(this).find('.level2');
            $(f_item).click(function () {
                $(f_arrow).toggleClass('act');
                $(f_level2).slideToggle();
            });
        });



        $('.filter_title').click(function () {
            $(this).toggleClass('act');
            $('.filter_nav').slideToggle();
        });


        $(".phone").mask("+48 (99) 999-99-99");

        $("#modal_form").validate();
        $("#payment_form").validate();



        $('.amount .down').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.amount .up').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });

    */

});


