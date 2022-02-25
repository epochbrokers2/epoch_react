jQuery(document).ready(function($) {

    $(".dblaged1").hide();
    $(".gpa_existing").change(function() {
        // console.log($(".gpa_existing").val());
        if ($(".gpa_existing").val() == 'Yes') {
            $(".dblaged1").show();
        } else {
            $(".dblaged1").hide();
        }
    });


    $("#gpademo").parsley();
    $("#gpademo").on("submit", function(event) {

        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

        if ($("#gpademo").parsley().isValid()) {
            $.ajax({
                url: "/demography/storeGpaDemography",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {

                },
                success: function(data) {
                    if (data.status == 'true') {
                        window.location.replace(baseURL + "/calulator/gpa");
                    } else {
                        swal(data.message);
                        return false;
                    }
                }
            });
        }

    });


    $("#gpaEmail").parsley();
    $("#gpaEmail").on("submit", function(event) {

        $('#loading').show();
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

        if ($("#gpaEmail").parsley().isValid()) {

            $.ajax({
                url: "/member/gpaemail",
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
                    swal("Mail has been sent!");
                }
            });
        }

    });

});