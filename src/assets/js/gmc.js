jQuery(document).ready(function($) {


    $("#maternityOpt1").change(function() {
        $('#loading').show();
        var option = $("#maternityOpt1").val();

        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);

        $.ajax({
            url: "/maternityBeneﬁtOpt1",
            method: "get",
            data: "opt=" + option + "&calc_id=" + calc_id,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt").html(data);
            }
        });

    });

    $("#cp1").change(function() {

        $('#loading').show();
        var value = $("#cp1").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);

        $.ajax({
            url: "/corporatefloaterOpt1",
            method: "get",
            data: "calc_id=" + calc_id + "&value=" + value,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt").html(data);
            }
        });

    });


    //// Option 2 

    $("#maternityOpt2").change(function() {
        $('#loading').show();
        var option = $("#maternityOpt2").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);

        $.ajax({
            url: "/maternityBeneﬁtOpt2",
            method: "get",
            data: "opt=" + option + "&calc_id=" + calc_id,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });

    });

    $("#cp2").change(function() {

        var value = $("#cp2").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);
        $('#loading').show();
        $.ajax({
            url: "/corporatefloaterOpt2",
            method: "get",
            data: "calc_id=" + calc_id + "&value=" + value,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });

    });


    $("#roomRentCapingICU2").change(function() {
        $('#loading').show();
        var option = $("#roomRentCapingICU2").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);

        $.ajax({
            url: "/noroomrentcapingicu2",
            method: "get",
            data: "calc_id=" + calc_id + "&opt=" + option,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });


    });


    $("#roomRentCaping2").change(function() {
        $('#loading').show();
        var option = $("#roomRentCaping2").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);

        $.ajax({
            url: "/noroomrentcaping2",
            method: "get",
            data: "calc_id=" + calc_id + "&opt=" + option,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });


    });


    //// Option 3 

    $("#maternityOpt3").change(function() {
        $('#loading').show();
        var option = $("#maternityOpt3").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);

        $.ajax({
            url: "/maternityBeneﬁtOpt3",
            method: "get",
            data: "opt=" + option + "&calc_id=" + calc_id,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });

    });

    $("#cp3").change(function() {

        var value = $("#cp3").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);
        $('#loading').show();
        $.ajax({
            url: "/corporatefloaterOpt3",
            method: "get",
            data: "calc_id=" + calc_id + "&value=" + value,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });

    });


    $("#roomRentCaping3").change(function() {

        $('#loading').show();
        var option = $("#roomRentCaping3").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);

        $.ajax({
            url: "/noroomrentcaping3",
            method: "get",
            data: "calc_id=" + calc_id + "&opt=" + option,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });


    });


    $("#roomRentCapingICU3").change(function() {

        $('#loading').show();
        var option = $("#roomRentCapingICU3").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);

        $.ajax({
            url: "/noRoomRentCapingICU3",
            method: "get",
            data: "calc_id=" + calc_id + "&opt=" + option,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });


    });

    $("#copayment3").change(function() {

        $('#loading').show();
        var option = $("#copayment3").val();
        var calc_id = $("#calc_id").attr('value');
        calc_id = parseInt(calc_id);

        $.ajax({
            url: "/copayment3",
            method: "get",
            data: "calc_id=" + calc_id + "&opt=" + option,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });


    });

    $("#gmcEmail").parsley();
    $("#gmcEmail").on("submit", function(event) {

        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

        if ($("#gmcEmail").parsley().isValid()) {

            $.ajax({
                url: "/member/email",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {
                    $('.epoch_spinner_all').show();
                },
                success: function(data) {
                    $('.epoch_spinner_all').hide();
                    // swal("Mail has been sent!", "", "success");
                    swal("Mail has been sent!");
                }
            });
        }

    });

});