function getLoadingData(dataArray) {
    $('#loading').show();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: baseURL + "/rater/gpa/loading_calculation",
        method: "post",
        data: dataArray,
        success: function (data) {
            $('#loading').hide();
            if (data.status == true) {
                // console.log(data.data.type);
                if (data.data.type == 1) {
                    $("#finalAmt1").html(data.data.premium);
                    $(".totalEmp1").html(data.data.totEmp);
                    $(".totalSumInsured1").html('₹' + data.data.sum_insured);
                }

                if (data.data.type  == 2) {
                    $("#finalAmt2").html(data.data.premium);
                    $(".totalEmp2").html(data.data.totEmp);
                    $(".totalSumInsured2").html('₹' + data.data.sum_insured);
                }

                if (data.data.type  == 3) {
                    $("#finalAmt3").html(data.data.premium);
                    $(".totalEmp3").html(data.data.totEmp);
                    $(".totalSumInsured3").html('₹' + data.data.sum_insured);
                }
               
            } else {
                swal({
                    title: "",
                    text: data.message,
                    icon: "info",
                });
            }
        }
    });
}

function loading1(){
    var sumInsured = $("#sumInsured1").val();
    var office_staff = $(".office_staff1").val();
    var worker = $(".worker1").val();
    var hazardous_activies = $(".hazardous_activies1").val();
    var medicalExpense = $("#medicalExpense1").val();
    var passData = {"sumInsured":sumInsured,"office_staff":office_staff,"worker":worker,"hazardous_activies":hazardous_activies,"medicalExpense":medicalExpense,"type":1};
    getLoadingData(passData);
}

function loading2(){
    var sumInsured = $("#sumInsured2").val();
    var office_staff = $(".office_staff2").val();
    var worker = $(".worker2").val();
    var hazardous_activies = $(".hazardous_activies2").val();
    var medicalExpense = $("#medicalExpense2").val();
    var passData = {"sumInsured":sumInsured,"office_staff":office_staff,"worker":worker,"hazardous_activies":hazardous_activies,"medicalExpense":medicalExpense,"type":2};
    getLoadingData(passData);
}

function loading3(){
    var sumInsured = $("#sumInsured3").val();
    var office_staff = $(".office_staff3").val();
    var worker = $(".worker3").val();
    var hazardous_activies = $(".hazardous_activies3").val();
    var medicalExpense = $("#medicalExpense3").val();
    var passData = {"sumInsured":sumInsured,"office_staff":office_staff,"worker":worker,"hazardous_activies":hazardous_activies,"medicalExpense":medicalExpense,"type":3};
    getLoadingData(passData);
}

$("#rater_email_gpa").on("submit", function (event) {
    event.preventDefault();
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: baseURL + "/rater/gpa/sendemail",
        method: "POST",
        beforeSend: function () {
            $('.epoch_spinner_all').show();
        },
        success: function (data) {
            $('.epoch_spinner_all').hide();
            // swal("Mail has been sent!");
            if (data.status == true) {
                swal({
                    title: "",
                    text: "Mail has been sent!",
                    icon: "success",
                });
            } else {
                swal({
                    title: "",
                    text: "Mail not send.",
                    icon: "info",
                });
            }

        }
    });

});
