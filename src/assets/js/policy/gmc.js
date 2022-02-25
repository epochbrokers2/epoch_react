
$("#demography_gmc").parsley();

$("#demography_gmc").on("submit", function(event) {
    event.preventDefault();
    // window.location.assign(baseURL + "/testing/quote/group-health-insurance-policy/"+empCount);   
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
    var formData = new FormData(this);
    if ($("#demography_gmc").parsley().isValid()) {
        $.ajax({
            url: baseURL+"/testing/gmc-save-demography",
            method: "POST",
            data: formData,
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() { },
            success: function(data) {
                if (data.status == 'true') {
                    window.location.assign(baseURL + "/testing/quote/group-health-insurance-policy/");
                } else {
                    swal(data.message);
                    return false;
                }
            }
        });
    }


});