$("#new_quote_policies").parsley();
$("#new_quote_policies").on("submit", function(event) {

    event.preventDefault();
    var formData = new FormData(this);
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
    var policy_id = $("#policy_id").val();

    if ($("#new_quote_policies").parsley().isValid()) {
        $.ajax({
            url: baseURL + "/save-quote",
            method: "POST",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {

            },
            success: function(data) {
                if (policy_id == 1) {
                    $('.about_first_fold_right_second').css({ 'display': 'block' });
                    $('.about_first_fold_right_first').css({ 'display': 'none' });

                } else if (policy_id == 2) {

                    $('.about_first_fold_right_second').css({ 'display': 'block' });
                    $('.about_first_fold_right_first').css({ 'display': 'none' });
                    // window.location.assign(baseURL + "/demography/group-personal-accident-policy");


                } else if (policy_id == 3) {
                    window.location.assign(baseURL + "/standard-fire-demo-graphy");
                } else if (policy_id == 25) {
                    window.location.assign("http://online.epochbrokers.com/car/input?enquiry_id=2021061178893", '_blank');
                    //window.location.replace(baseURL +"/standard-fire-demo-graphy");
                } else if (policy_id == 27) {
                    window.location.assign("http://online.epochbrokers.com/car/input?enquiry_id=2021061178893", '_blank');

                } else if (policy_id == 28) {
                    window.location.assign("http://online.epochbrokers.com/bike/input?enquiry_id=2021061174188", '_blank');

                } else if (policy_id == 29) {
                    window.location.assign("http://online.epochbrokers.com/mediclaim/input?enquiry_id=2021061191604", '_blank');
                } else if (policy_id == 30) {
                    window.location.assign("http://online.epochbrokers.com/top_up/input?enquiry_id=2021061169227", '_blank');

                } else if (policy_id == 31) {
                    window.location.assign("http://online.epochbrokers.com/travel/input?enquiry_id=2021061199031", '_blank');

                } else if (policy_id == 34) {
                    window.location.assign("http://online.epochbrokers.com/term/input?enquiry_id=2021061177679", '_blank');

                } else {

                    swal("Our executive will connnect you shortly!");
                }
            }
        });
    }

});



$("#demography_new_gmc").parsley();
$("#demography_new_gmc").on("submit", function(event) {
    event.preventDefault();
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
    var formData = new FormData(this);
    if ($("#demography_new_gmc").parsley().isValid()) {
        $.ajax({
            url: baseURL + "/beta/gmc-save-demography",
            method: "POST",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {},
            success: function(data) {
                if (data.status == 'true') {
                    window.location.assign(baseURL + "/beta/quote/group-health-insurance-policy");
                } else {
                    swal(data.message);
                    return false;
                }
            }
        });
    }


});


$(".dblaged1").hide();
$(".gpa_existing").change(function() {
    // console.log($(".gpa_existing").val());
    if ($(".gpa_existing").val() == 'Yes') {
        $(".dblaged1").show();
    } else {
        $(".dblaged1").hide();
    }
});




$("#demography_gpa_new").parsley();
$("#demography_gpa_new").on("submit", function(event) {

    event.preventDefault();
    var formData = new FormData(this);
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
    // var policy_id = $("#policy_id").val(); 
    window.location.assign(baseURL + "/beta/quote/group-personal-accident-policy");

    // if ($("#demography_gpa_new").parsley().isValid()) {
    //     $.ajax({
    //         url: "/save-demography",
    //         method: "POST",
    //         data: formData,
    //         dataType: "json",
    //         processData: false,
    //         contentType: false,
    //         beforeSend: function() {

    //         },
    //         success: function(data) {
    //             // console.log(data);
    //             if (data.status == 'true') {
    //                 window.location.assign(baseURL + "/beta/quote/group-personal-accident-policy");
    //             } else {

    //                 swal(data.message);
    //                 return false;
    //             }

    //         }
    //     });
    // }

});