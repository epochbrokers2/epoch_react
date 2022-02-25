jQuery(document).ready(function($) {
    // $("#insurology").val('');
    $("#insurology").keyup(function() {
        var value = $("input#insurology").val();

        $.ajax({
            type: "GET",
            url: baseURL + "/getinsurology",
            data: {
                'keywords': value
            },
            dataType: "json",
            success: function success(data) {
                // console.log(data);
                var inso = data;
                var myData = "";
                inso.forEach(generateLIst);

                function generateLIst(dataItem, index) {
                    myData += '<li  class="ui-menu-item insuclass" ><a href="' + baseURL + '/insurology/' + dataItem.title + "/" + dataItem.value + '" class="ui-corner-all insuclass">' + dataItem.label + '</a></li>';
                }
                if (myData != '') {
                    $(".match_result_insu").fadeIn();
                    $(".match_result_insu").html('<ul class="insuclass ui-menu ui-widget">' + myData + '</ul>');
                } else {
                    $(".match_result_insu").fadeIn();
                    $(".match_result_insu").html(myData);
                }
                $(".match_result_insu ul li a").hover(function() {
                    let getLabel = $(this).text();
                    $("#insurology").val(getLabel);
                });
                $('body').on('mouseover', function(e) {
                    // console.log(e.target.classList.contains('insuclass'));
                    if (e.target.classList.contains('insuclass') == false) {
                        $(".match_result_insu").fadeOut();
                        $(".match_result_insu").html('');
                    }
                });

            }
        });
    });



});