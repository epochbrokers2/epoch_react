// !function(a){a.fn.preloadinator=function(e){"use strict";var o=a.extend({scroll:!1,minTime:0,animation:"fadeOut",animationDuration:400,afterDisableScroll:function(){},afterEnableScroll:function(){},afterRemovePreloader:function(){}},e),n=this,r=(new Date).getTime();return a.fn.preloadinator.disableScroll=function(){a("body").css("overflow","hidden"),"function"==typeof o.afterDisableScroll&&o.afterDisableScroll.call(this)},a.fn.preloadinator.enableScroll=function(){a("body").css("overflow","auto"),"function"==typeof o.afterEnableScroll&&o.afterEnableScroll.call(this)},a.fn.preloadinator.removePreloader=function(){a(n)[o.animation](o.animationDuration,function(){!1===o.scroll&&a.fn.preloadinator.enableScroll(),"function"==typeof o.afterRemovePreloader&&o.afterRemovePreloader.call(this)})},a.fn.preloadinator.minTimeElapsed=function(){return(new Date).getTime()-r>=o.minTime},!1===o.scroll&&a.fn.preloadinator.disableScroll(),a(window).on("load",function(){if(a.fn.preloadinator.minTimeElapsed())a.fn.preloadinator.removePreloader();else{var e=(new Date).getTime()-r;setTimeout(a.fn.preloadinator.removePreloader,o.minTime-e)}}),this}}(jQuery);
// // $('.js-preloader').preloadinator({
// //   minTime: 2000
// // });
$(window).on('load', function () {
    $('.preloader').hide();
});

document.addEventListener("DOMContentLoaded", () => {
    //Navbar js
    !(function(e) {
        e.fn.menumaker = function(n) {
            var s = e(this),
                i = e.extend({ format: "dropdown", sticky: !1 }, n);
            return this.each(function() {
                return (
                    s.find("li ul").parent().addClass("has-sub"),
                    (multiTg = function() {
                        s.find(".has-sub").prepend('<span class="submenu-button"></span>'),
                            s.find(".submenu-button").on("click", function() {
                                e(this).toggleClass("submenu-opened"),
                                    (e(this).siblings("ul").hasClass("open") ?
                                        e(this).siblings("ul").removeClass("open") :
                                        e(this).siblings("ul").addClass("open")
                                    ).slideToggle();
                            });
                    }),
                    "multitoggle" === i.format ? multiTg() : s.addClass("dropdown"), !0 === i.sticky && s.css("position", "fixed"),
                    (resizeFix = function() {
                        1e3 < e(window).width() && s.find("ul").show(),
                            e(window).width() <= 1e3 &&
                            s.find("ul").hide().removeClass("open");
                    }),
                    resizeFix(),
                    e(window).on("resize", resizeFix)
                );
            });
        };
    })(jQuery),
    (function(n) {
        n(document).ready(function() {
            n("#cssmenu").menumaker({ format: "multitoggle" });
        });
    })(jQuery);
    // Footer js
    $(document).on("click", ".showmore_list", function() {
        var s = $(this).children();
        $(this).hasClass("extraHidden") ?
            ($(this).removeClass("extraHidden").addClass("extraVisible"),
                $(this).find("a").html("Show less"),
                $(this).prevAll("li.read-more-target").css("display", "block")) :
            ($(this).removeClass("extraVisible").addClass("extraHidden"),
                $(this).find("a").html("Show more"),
                $(this).prevAll("li.read-more-target").css("display", "none"));
    });
    //Lazy loading js
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
        let t = new IntersectionObserver(function(e, r) {
            e.forEach(function(r) {
                if (r.isIntersecting) {
                    let e = r.target;
                    (e.src = e.dataset.src), e.classList.remove("lazy"), t.unobserve(e);
                }
            });
        });
        lazyImages.forEach(function(e) {
            t.observe(e);
        });
    }
    //Navbar toggle js
    function classToggle() {
        const e = document.querySelector(".navbar nav"),
            o = document.querySelector("#navbar-toggle");
        e.classList.toggle("navbar__ToggleShow"), o.classList.toggle("hamburger");
    }
    document
        .querySelector(".navbar__Link-toggle")
        .addEventListener("click", classToggle);
});
//Navbar sticky
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
        $(".navbar").addClass("is-sticky");
    } else {
        $(".navbar").removeClass("is-sticky");
    }
});
// Scroll-to-top
$(window).on("scroll", function() {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
});
$(".go-top").on("click", function() {
    $("html, body").animate({ scrollTop: "0" }, 500);
});
$(".blog_slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    lazyLoad: "ondemand",
    dots: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        },
    }, ],
});
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
    el.addEventListener("click", function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
        document.querySelector("body").classList.add("modalopen");
    });
}

for (const el of closeEls) {
    el.addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
        document.querySelector("body").classList.remove("modalopen");
    });
}

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
        document.querySelector("body").classList.remove("modalopen");
    }
});

document.addEventListener("keyup", e => {
    // if we press the ESC
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
        document.querySelector("body").classList.remove("modalopen");
    }
});