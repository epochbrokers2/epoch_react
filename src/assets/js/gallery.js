jQuery(document).ready(function($) {
    // console.log(urlHashGlobal);
    /**
     * custome page form validation
     *  
     * @author Vishal Gupta
     * 
     */

    // Pagination //
    $(function() {
        function startLoad() {
            if (window.location.search == "?type=presentation") {
                $("#showall").removeClass("epoch-nav-tab-active");
                $("#presentation").addClass("epoch-nav-tab-active");
                $(".presentation").removeClass("epoch_tab_hide");
                $.ajax({
                    url: '/gallery/find',
                    data: { 'type': 'presentation', 'keywords': '' },
                }).done(function(data) {
                    console.log(data);
                    $(".presentation").html(data);
                }).fail(function() {
                    console.log("Failed to load data!");
                });
            } else {
                $("#showall").addClass("epoch-nav-tab-active");
                $.ajax({
                    url: '/gallery/find',
                    data: { 'type': 'all', 'keywords': '' },
                }).done(function(data) {
                    $(".all").html(data);
                }).fail(function() {
                    console.log("Failed to load data!");
                });
            }

        }

        startLoad();


        function loadPages(tab) {
            $(tab).on('click', '.pagination a', function(e) {
                e.preventDefault();
                var url = $(this).attr('href');
                window.history.pushState("", "", url);
                loadGallery(url, tab);
            })
        }
        loadPages(".all");
        loadPages(".presentation");
        loadPages(".video");
        loadPages(".onePager");
        loadPages(".emailer");
        loadPages(".social");
        loadPages(".brochures");
        loadPages(".knowledge");
        loadPages(".claim");







        function loadGallery(url, printHtml) {
            // console.log(printHtml);
            $.ajax({
                url: url,
            }).done(function(data) {
                // console.log(data);
                $(printHtml).html(data);
            }).fail(function() {
                console.log("Failed to load data!");
            });
        }


        $(".gallery_category_tab div").click(function() {
            var tabName = $(this).attr('data-id');
            var url = '/gallery?type=' + tabName + '&page=1';
            loadGallery(url, '.' + tabName);
        });






        $(".search_keywords").keyup(function() {
            var tabType = $(".gallery_category_tab").find('.epoch-nav-tab-active').attr('data-id');
            var keywords = $(".search_keywords").val().toLowerCase();
            $.ajax({
                url: '/gallery/find',
                data: { 'type': tabType, 'keywords': keywords },
            }).done(function(data) {
                // console.log(data);
                $("." + tabType).html(data);
            }).fail(function() {
                console.log("Failed to load data!");
            });
        });


        $("#gallery_search").click(function() {
            var tabType = $(".gallery_category_tab").find('.epoch-nav-tab-active').attr('data-id');
            var keywords = $(".search_keywords").val().toLowerCase();
            $.ajax({
                url: '/gallery/find',
                data: { 'type': tabType, 'keywords': keywords },
            }).done(function(data) {
                // console.log(data);
                $("." + tabType).html(data);
            }).fail(function() {
                console.log("Failed to load data!");
            });
        });



    });

});