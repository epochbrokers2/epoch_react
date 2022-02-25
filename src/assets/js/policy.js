document.addEventListener("DOMContentLoaded", () => {
    $(".epoch-nav-tab").click(function(e) {
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
});
$(".claim_slider").slick({
    arrows: false,
    lazyLoad: "ondemand",
    dots: true,
});
$(".accordion")
    .find(".accordion-title")
    .on("click", function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle("fast");
        $(".accordion-content").not($(this).next()).slideUp("fast");
        $(".accordion-title").not($(this)).removeClass("active");
    });

function policy_second(e) {
    e.preventDefault();
    let first = document.querySelector('.about_first_fold_right_first')
    let second = document.querySelector('.about_first_fold_right_second')
    first.style.display = "none"
    second.style.display = "block"
    return false
}