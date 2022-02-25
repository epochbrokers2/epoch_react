jQuery(document).ready(function($) {

    $("#mem_login").parsley();
    $("#mem_login").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        $.ajax({
            url: "/member/mem_auth",
            method: "POST",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {
                $('.preloader').show();
            },
            success: function(data) {
                $('.preloader').hide();
                if (data.status == 'true') {
                    window.location.replace(baseURL + "/member/otp");
                } else {
                    $('#error').html('Invalid mobile no!');
                }
            }
        });
    });


    $("#mem_login_next").parsley();
    $("#mem_login_next").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        });
        $.ajax({
            url: "/member/otp_veryfy",
            method: "POST",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {
                $('#loading').show();
            },
            success: function(data) {
                $('#loading').hide();
                if (data.status == 'true') {
                    window.location.replace(baseURL + "/member/dashboard");
                } else {
                    $('#otp_error_res').html('Invalid OTP.');
                }
            }
        });
    });




    $("#resendOTPC").on("click", function(event) {
        event.preventDefault();
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        $.ajax({
            url: "/member/resend_otp",
            method: "POST",
            beforeSend: function() {
                // $('#loading').show();
            },
            success: function(data) {
                // console.log(data);
                if (data.status == true) {
                    $("#resendOTPC").hide();
                    $("#otp_error_res2").html('<span class="text-success">Enter 4 digit code sent to your mobile number</span>');
                } else {
                    $('#otp_error_res').html('Something went wrong.');
                }
            }
        });

    });




});