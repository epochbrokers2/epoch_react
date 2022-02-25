jQuery(document).ready(function() {
    /**
     * custome page form validation
     *
     * @author Vishal Gupta
     *
     */

    //feedback form data
    $("#feedback").parsley();
    $("#feedback").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#feedback").parsley().isValid()) {
            $.ajax({
                url: "/feedback",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    $("#feedback").trigger("reset");
                    if (data.status == 'true') {
                        $('#msg').html('Thank you for your feedback!');
                    } else {
                        $('#msg').html('Something went wrong!');
                    }
                }
            });
        }

    });
    $("#feedback_modal .close-modal").on("click", function(event) {
        event.preventDefault();
        $("#feedback_modal #feedback").parsley('reset').destroy();
        $("#feedback_modal #feedback").parsley();
        $("#feedback_modal #feedback").trigger("reset");

    });

    // Media Presence form query
    $(".media_sent_email form").parsley();
    $(".media_sent_email form").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        var mmdi = $(this).serializeArray()[2].value;

        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($(this).parsley().isValid()) {
            $.ajax({
                url: "/sent-email-to-user",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {
                    $('#media' + mmdi + ' .epoch_spinner_all').show();
                },
                success: function(data) {
                    if (data.status == 'true') {
                        $('#media' + mmdi + ' .epoch_spinner_all').hide();
                        $("#" + data.formClass + " form").html('<strong style="color:green;">This article have sent on your email.</strong>');
                    } else {
                        $('#media' + mmdi + ' .epoch_spinner_all').hide();
                        $('#media' + mmdi + ' .loader_media').html('<strong style="color:red;">Something went wrong</strong>');
                    }


                }
            });
        }

    });

    //home page model in use start
    $("#issuer_submit").submit(function(event) {
        event.preventDefault();
        // on submit button click
        var urldata = $("#issuer_submit #dropDownId1 :selected").val(); // get the selected  option value
        window.open("" + urldata + ""); // open a new window. here you need to change the url according to your wish.
    });


    //tpa wise
    $("#tpa_wise_home").submit(function(event) {
        // on submit button click
        event.preventDefault();
        var urldata = $("#tpa_wise_home #dropDownId2 :selected").val(); // get the selected  option value
        window.open("" + urldata + ""); // open a new window. here you need to change the url according to your wish.
    });

    //issur wise
    $("#cashless_motors").submit(function(event) {
        // on submit button click
        event.preventDefault();
        var urldata = $("#cashless_motors #dropDownId2 :selected").val(); // get the selected  option value
        window.open("" + urldata + ""); // open a new window. here you need to change the url according to your wish.
    });


    // console.warn(window.history );


});