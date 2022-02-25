/**
 *  use in GMC new testining http://127.0.0.1:8000/testing_gmc/policies/employees/group-health-insurance-policy
 *  Author : Vishal Gupta
 *  Date : 12-1-2021
 */


$("#quoteForGmc").parsley();
$("#quoteForGmc").on("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
    var policy_id = $("#policy_id").val();
    if ($("#quoteForGmc").parsley().isValid()) {
        $.ajax({
            url: baseURL + "/save-quote",
            method: "POST",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            success: function(data) {
                $('.about_first_fold_right_second').css({ 'display': 'block' });
                $('.about_first_fold_right_first').css({ 'display': 'none' });
            }
        });
    }

});



$("#demography_gmc").parsley();
$("#demography_gmc").on("submit", function(event) {
    event.preventDefault();
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
    var formData = new FormData(this);
    if ($("#demography_gmc").parsley().isValid()) {
        $.ajax({
            url: baseURL + "/testing_gmc/gmc-save-demography",
            method: "POST",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() {},
            success: function(data) {
                if (data.status == 'true') {
                    window.location.assign(baseURL + "/testing_gmc/quote/group-health-insurance-policy/");
                } else {
                    swal(data.message);
                    return false;
                }
            }
        });
    }


});

$('.renewal_').click(function() {
    $('.section_2').show();
    $('.section_1').hide();
});

const toggleRatio = (val) => {
    if (val == '1') {
        $('.section_renewal').show();
    } else {
        $('.section_renewal').hide();
    }

}

$('.family_def_').click(function() {
    if (!jQuery(".checkbox").is(":checked")) {
        swal('Family Definition is required');
    } else {
        $('.section_2').hide();
        $('.section_3').show();
        $('.submit_button_').show();

    }
})