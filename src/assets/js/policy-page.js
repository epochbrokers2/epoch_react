jQuery(document).ready(function($) {


    /**
     * custome page form validation
     *  
     * @author Hari Yadav
     * policy pages use it
     * 
     */
    $("#dblaged1").hide();
    $("#quotefor1").change(function() {
        if ($("#quotefor1").val() == 2) {
            $("#dblaged1").show();
        } else {
            $("#dblaged1").hide();
        }
    });


    //call form poolicy pages
    $("#callback").parsley();
    $("#callback").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

        if ($("#callback").parsley().isValid()) {
            $.ajax({
                url: "/callback",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    if (data.status == 'true') {
                        $("#callback").trigger("reset");
                        $('#msgcallback').html('<span style="color:green;">Our executive contact you shortly! Thanks</span>');
                    } else {
                        $('#msgcallback').html('<span style="color:red;">Something went wrong!</span>');
                        // if (typeof value === 'string') {
                        //     $("#callback ."+key+"_" ).after("<span class='text-danger data_error_"+key+"'>"+value+ "</br></span>");
                        // } else {
                        //     for (const [key1, value1] of Object.entries(value )) {
                        //       $("#callback ."+key+"_" ).after("<span class='text-danger data_error_"+key+"'>"+value1+ "</br></span>");
                        //     }
                        // }
                    }

                }
            });
        }

    });


    //call model close
    $("#callback_modal .close-modal").on("click", function(event) {
        event.preventDefault();
        $("#callback_modal #callback").parsley('reset').destroy();
        $("#callback_modal #callback").parsley();
        $("#callback_modal #callback").trigger("reset");
    });


    $("#quote").parsley();
    $("#quote").on("submit", function(event) {

        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        var policy_id = $("#policy_id").val();

        if ($("#quote").parsley().isValid()) {
            $.ajax({
                url: "/save-quote",
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
                        window.location.assign(baseURL + "/demography/group-personal-accident-policy");
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



    $("#demography").parsley();
    $("#demography").on("submit", function(event) {

        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        // var policy_id = $("#policy_id").val(); 

        if ($("#demography").parsley().isValid()) {
            $.ajax({
                url: "/save-demography",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {

                },
                success: function(data) {
                    if (data.status == 'true') {
                        window.location.assign(baseURL + "/calculator/employees/group-health-insurance-policy");
                    } else {

                        swal(data.message);
                        return false;
                    }

                }
            });
        }

    });

    function download(downloadURL) {
        location = downloadURL;
    }


    //used in download of policy pages start
    $("#insurer_id_downloads").parsley();
    $("#insurer_id_downloads").submit(function(e) {
        e.preventDefault();
        var insurer_id = $("#insurer_id").val();
        var pd_id = $("#policy-details-id").attr('value');
        var formTypeID = $("#form-type-id").attr('value');
        console.table([insurer_id, pd_id, formTypeID]);
        $.ajax({
            url: "/pdfdownload",
            method: "get",
            dataType: "json",
            data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
            processData: false,
            contentType: false,
            success: function(data) {
                var pdfFile = data.file;
                url = baseURL + "/storage/pdf/" + pdfFile;
                window.open(url, '_blank');

            }
        });

    });

    $("#pw_insurer_id_download").parsley();
    $("#pw_insurer_id_download").submit(function(e) {
        e.preventDefault();
        var insurer_id = $("#pw_insurer_id").val();
        var pd_id = $("#pw-policy-details-id").attr('value');
        var formTypeID = $("#pw-form-type-id").attr('value');
        $.ajax({
            url: "/pdfdownload",
            method: "get",
            dataType: "json",
            data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
            processData: false,
            contentType: false,
            success: function(data) {
                var pdfFile = data.file;
                url = baseURL + "/storage/pdf/" + pdfFile;
                window.open(url, '_blank');

            }
        });

    });

    $("#cl_insurer_id_download").parsley();
    $("#cl_insurer_id_download").submit(function(e) {
        e.preventDefault();
        var insurer_id = $("#cl_insurer_id").val();
        var pd_id = $("#cl-policy-details-id").attr('value');
        var formTypeID = $("#cl-form-type-id").attr('value');

        $.ajax({
            url: "/pdfdownload",
            method: "get",
            dataType: "json",
            data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
            processData: false,
            contentType: false,
            success: function(data) {
                var pdfFile = data.file;
                url = baseURL + "/storage/pdf/" + pdfFile;
                window.open(url, '_blank');
            }
        });
    });
    //used in download of policy pages end

    $("#nh_insurer_id").click(function() {

        var insurer_id = $("#nh_insurer_id").val();
        var pd_id = $("#nh-policy-details-id").attr('value');
        var formTypeID = $("#nh-form-type-id").attr('value');

        $.ajax({
            url: "/pdfdownload",
            method: "get",
            dataType: "json",
            data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
            processData: false,
            contentType: false,
            success: function(data) {
                //console.log(data.file); 

                var pdfFile = data.file;

                $("#nh-download").attr("href", "pdfFile");
                $("#nh-download").attr("download");
                $("#nh-download").attr("target", "_blank");
                url = baseURL + "/storage/pdf/" + pdfFile;
                $("a[href='pdfFile']").attr("href", "" + url + "");
            }
        });

        //   alert("Hello " + claim + " " + pd_id);
    });

    //use in fire demography
    $('#state_id').change(function() {
        var state_id = $(this).val();

        $.ajax({
            url: "/getCity",
            method: "get",
            dataType: "json",
            data: "state_id=" + state_id,
            processData: false,
            contentType: false,
            success: function(data) {

                if (data) {
                    $("#city").empty();
                    $("#city").append('<option>Select City</option>');
                    $.each(data, function(key, value) {
                        $("#city").append('<option value="' + key + '">' + value + '</option>');
                    });

                } else {
                    $("#city").empty();
                }

            }
        });

    });


    //fire policy
    $('#house_type').change(function() {
        var house_type = $(this).val();
        if (house_type == '1') {

            $('.Work-fire').css({ 'display': 'table-row' });
            $('.type-ware').css({ 'display': 'none' });
            //$('#serchFactory').removeAttr('value');
        }

        if (house_type == '2') {
            $('.type-ware').css({ 'display': 'table-row' });
            $('.Work-fire').css({ 'display': 'table-row' });

        }
    });




    $("#policy_any").parsley();
    $("#policy_any").on("submit", function(event) {

        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

        if ($("#policy_any").parsley().isValid()) {
            $.ajax({
                url: "/policyanylysed",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {
                    // $("#Feedback").hide();
                    // $("#close").hide();
                },
                success: function(data) {
                    $("#policy_any").trigger("reset");
                    $('#plmsg').html('Thank you for contacting us!');
                }
            });
        }

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

    //fire policy >Work in Factory unput feilds 
    $("#serchFactory").keyup(function() {
        var house_type = $("select#house_type").val();
        var value = $("input#serchFactory").val();
        // console.log(house_type);
        // console.log(value);
        $.ajax({
            type: "GET",
            url: baseURL + "/getOccupancy",
            // data: { 'keywords': value + "&house_type=" + house_type },
            data: "keywords=" + value + "&house_type=" + house_type,
            dataType: "json",
            success: function success(data) {
                // console.log(data);
                var inso = data;
                var myData = "";
                if (data !== null) {
                    inso.forEach(generateLIst);
                }


                function generateLIst(dataItem, index) {
                    myData += '<li  class="ui-menu-item insuclass" >' + dataItem + '</li>';
                }
                if (myData != '') {
                    $(".match_result").fadeIn();
                    $(".match_result").html('<ul class="insuclass ui-menu ui-widget">' + myData + '</ul>');
                } else {
                    $(".match_result").fadeIn();
                    $(".match_result").html(myData);
                }
                $(".match_result ul li").click(function() {
                    let getLabel = $(this).text();
                    $("#serchFactory").val(getLabel);
                    $(".match_result").fadeOut();
                    $(".match_result").html('');
                });
                $('body').on('mouseover', function(e) {
                    // console.log(e.target.classList.contains('insuclass'));
                    if (e.target.classList.contains('insuclass') == false) {
                        $(".match_result").fadeOut();
                        $(".match_result").html('');
                    }
                });
            }
        });
    });

});