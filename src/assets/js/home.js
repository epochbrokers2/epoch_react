document.addEventListener("DOMContentLoaded", () => {
    $(".epoch-nav-tab").click(function(e) {
        $(".policy_slider_right_item .slider").slick("refresh");
        $(this)
            .addClass("epoch-nav-tab-active")
            .siblings()
            .removeClass("epoch-nav-tab-active");
        var class1 = $(this).attr("data-id");
        $("." + class1 + "")
            .removeClass("epoch_tab_hide")
            .siblings()
            .addClass("epoch_tab_hide");
    });

    // var policy_category_height = document.querySelector(
    //   ".main_policies_category"
    // ).offsetHeight;
    // if (screen.width > 768) {
    //   document.querySelector(".wrap_policy").style.height =
    //     policy_category_height + "px";
    // }
});

$(".testimonial").slick({
    arrows: false,
    lazyLoad: "ondemand",
    dots: true,
});
$(".partner_slider").slick({
    slidesToShow: 7,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    lazyLoad: "ondemand",
    dots: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
});
$(".awards_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    lazyLoad: "ondemand",
    dots: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
        },
    }, ],
});
$(".knowledge_slider").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    lazyLoad: "ondemand",
    dots: true,
});
var slidesToShowa = 7;
var childElements = $('.poly_details_main_slider').children().length;
// Check if we can fulfill the preferred slidesToShowa
if( slidesToShowa > (childElements-1) ) {
    // Otherwise, make slidesToShowa the number of slides - 1
    // Has to be -1 otherwise there is nothing to scroll for - all the slides would already be visible
    slidesToShowa = (childElements-2);
}
console.log(slidesToShowa)
$(".poly_details_main_slider").slick({
    slidesToShow: 7,
    slidesToScroll: 2,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$(function() {
    // DOM ready
    $('body').click(function(e) {
        if ($(e.target).closest(".product_form_div").length === 0) {
          $(".product_form_div").find("ul").slideUp();
        }
    });
    $(".product_form_div").each(function() {
        var $input = $(this).find("input");
        var $dropDown = $(this).find("ul");

        $(this).on("click", function() {
            $dropDown.stop().slideToggle();
            let ccid = $(this).attr('data-id');
            // console.log( $(this).attr('data-id'));
            $("."+ccid).find("ul").slideUp()
        });
 
        $dropDown.on("click", "li", function() {
            $input.val($(this).text());
            let url = $(this).attr('value');
            if (url != '') {
                window.location.href = url;
            }
        });
    });
});