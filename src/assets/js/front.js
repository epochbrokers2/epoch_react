jQuery(document).ready(function($) {


    /**
     * custome page form validation
     *  
     * @author Hari Yadav
     * 
     */



    // Pagination //
    $(function() {
        $('body').on('click', '.pagination a', function(e) {
            e.preventDefault();
            $('#load').append('<img style="position: absolute; left: 0; top: 0; z-index: 10000;" src="https://i.imgur.com/v3KWF05.gif />');
            var url = $(this).attr('href');
            window.history.pushState("", "", url);
            loadPosts(url);
        });

        function loadPosts(url) {

            $.ajax({
                url: url
            }).done(function(data) {
                $('#table_data').html(data);
            }).fail(function() {
                console.log("Failed to load data!");
            });
        }
    });

    // End Pagination data

    $("#carrier").parsley();
    $("#carrier").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

        if ($("#carrier").parsley().isValid()) {
            $.ajax({
                url: "/store-career",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {
                    // $("#callback").hide();
                },
                success: function(data) {
                    $("#carrier").trigger("reset");
                    $('#msgccarrier').html('<strong>Thank you for visiting us today! Our HR team will connect you shortly! </strong>');

                }
            });
        }

    });

    $("#stateId").change(function() {
        var id = $('#stateId').val();
        var hitURL = baseURL + '/getCities';
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        $('#ajax').html('');
        $.ajax({
            url: hitURL,
            type: "GET",
            data: { value: id },
            dataType: "json",
            beforeSend: function() {

            },
            success: function(res) {
                if (res) {
                    $("#cityId").empty();
                    $("#cityId").append('<option value="">Select City</option>');
                    $.each(res, function(key, value) {
                        $("#cityId").append('<option value="' + key + '">' + value + '</option>');
                    });

                } else {
                    $("#cityId").empty();
                }

            }
        });


    });


    $("#cityId").change(function() {
        var id = $('#cityId').val();
        var hitURL = baseURL + '/getWindshields';
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

        $.ajax({
            url: hitURL,
            type: "GET",
            data: { id: id },
            dataType: "json",
            beforeSend: function() {

            },
            success: function(data) {
                $('#windshield_responce').html(data.html);
            }
        });


    });

    $("#medicalExpenses").change(function() {

        var option = $("#medicalExpenses").val();
        var calc_id = $("#gpc_calc_id").attr('value');
        calc_id = parseInt(calc_id);
        $.ajax({
            url: "/medicalExpence",
            method: "get",
            data: "opt=" + option + "&calc_id=" + calc_id,
            processData: false,
            contentType: false,
            success: function(data) {
                $("#finalAmt").html(data);
            }
        });

    });


    $("#gallery_search").click(function() {

        // console.log('form b');
        var tabName = $("#myBtnContainer ul li").find('.active').attr('href');
        var keywords = $(".search_keywords").val().toLowerCase();
        if (keywords != '') {
            var checlkattr = $("#box-container " + tabName).attr('data-checktitle');
            $("#box-container " + tabName).each(function(i, a) {
                $.each($("#box-container " + tabName + " div"), function(i, a) {
                    if ($(this).attr('data-checktitle') != undefined) {
                        var res = $(this).attr('data-checktitle').toLowerCase().search(keywords);
                        if (res != -1) {
                            $(a).show();

                        } else {
                            $(a).hide();
                        }

                    }
                })
            })
        }

    });

    $(".search_keywords").keyup(function() {
        // console.log('change b');
        var tabName = $("#myBtnContainer ul li").find('.active').attr('href');
        var keywords = $(".search_keywords").val().toLowerCase();
        if (keywords != '') {
            var checlkattr = $("#box-container " + tabName).attr('data-checktitle');
            $("#box-container " + tabName).each(function(i, a) {
                $.each($("#box-container " + tabName + " div"), function(i, a) {
                    if ($(this).attr('data-checktitle') != undefined) {
                        var res = $(this).attr('data-checktitle').toLowerCase().search(keywords);
                        if (res != -1) {
                            $(a).show();

                        } else {
                            $(a).hide();
                        }
                    }
                })
            })
        } else {
            var checlkattr = $("#box-container " + tabName).attr('data-checktitle');
            $("#box-container " + tabName).each(function(i, a) {
                $.each($("#box-container " + tabName + " div"), function(i, a) {
                    if ($(this).attr('data-checktitle') != undefined) {
                        $(a).show();
                    }
                })
            })
        }

    });

    $("#myBtnContainer ul li a").click(function() {
        // console.log('click b');
        var tabName = $(this).attr('href');
        var checlkattr = $("#box-container " + tabName).attr('data-checktitle');
        $("#box-container " + tabName).each(function(i, a) {
            $.each($("#box-container " + tabName + " div"), function(i, a) {
                console.log(a);

                $(a).show();
            })
        })

    });


});