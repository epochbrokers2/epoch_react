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

    // End Pagination datat 

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
                    // $("#home").removeClass("show");
                    // $("#home").removeClass("active");
                    // $("#liId").addClass("tab-active");
                },
                success: function(data) {

                    if (policy_id == 1) {
                        $('.about_first_fold_right_second').css({ 'display': 'block' });
                        $('.about_first_fold_right_first').css({ 'display': 'none' });
                        // $('.memb-tab').addClass('current');
                        // $('.con-info').removeClass('current');


                    } else if (policy_id == 2) {
                        window.location.replace(baseURL + "/demography/group-personal-accident-policy");
                    } else if (policy_id == 3) {
                        window.location.replace(baseURL + "/standard-fire-demo-graphy");
                    } else if (policy_id == 25) {
                        window.open("http://online.epochbrokers.com/car/input?enquiry_id=2021061178893", '_blank');
                        //window.location.replace(baseURL +"/standard-fire-demo-graphy");
                    } else if (policy_id == 27) {
                        window.open("http://online.epochbrokers.com/car/input?enquiry_id=2021061178893", '_blank');

                    } else if (policy_id == 28) {
                        window.open("http://online.epochbrokers.com/bike/input?enquiry_id=2021061174188", '_blank');

                    } else if (policy_id == 29) {
                        window.open("http://online.epochbrokers.com/mediclaim/input?enquiry_id=2021061191604", '_blank');
                    } else if (policy_id == 30) {
                        window.open("http://online.epochbrokers.com/top_up/input?enquiry_id=2021061169227", '_blank');

                    } else if (policy_id == 31) {
                        window.open("http://online.epochbrokers.com/travel/input?enquiry_id=2021061199031", '_blank');

                    } else if (policy_id == 34) {
                        window.open("http://online.epochbrokers.com/term/input?enquiry_id=2021061177679", '_blank');

                    } else {
                        // $("#msg").html('Thank you for contacting us! our executive will connnect you shortly');
                        alert('Our executive will connnect you shortly!');
                        // swal("Our executive will connnect you shortly!");
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
                        window.location.replace(baseURL + "/calculator/employees/group-health-insurance-policy");
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


    $("#insurer_id").click(function() {

        var insurer_id = $("#insurer_id").val();
        var pd_id = $("#policy-details-id").attr('value');
        var formTypeID = $("#form-type-id").attr('value');

        $.ajax({
            url: "/pdfdownload",
            method: "get",
            dataType: "json",
            data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
            processData: false,
            contentType: false,
            success: function(data) {
                // console.log(data.file); 

                var pdfFile = data.file;

                $("#download").attr("href", "pdfFile");
                $("#download").attr("download");
                $("#download").attr("target", "_blank");

                url = baseURL + "/storage/pdf/" + pdfFile;
                $("a[href='pdfFile']").attr("href", "" + url + "");

            }
        });

    });


    $("#pw_insurer_id").click(function() {

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
                //console.log(data.file); 

                var pdfFile = data.file;

                $("#pw-download").attr("href", "pdfFile");
                $("#pw-download").attr("download");
                $("#pw-download").attr("target", "_blank");

                url = baseURL + "/storage/pdf/" + pdfFile;
                $("a[href='pdfFile']").attr("href", "" + url + "");

            }
        });


        //   alert("Hello " + claim + " " + pd_id);
    });


    $("#cl_insurer_id").click(function() {

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
                //console.log(data.file); 

                var pdfFile = data.file;

                $("#cl-download").attr("href", "pdfFile");
                $("#cl-download").attr("download");
                $("#cl-download").attr("target", "_blank");
                url = baseURL + "/storage/pdf/" + pdfFile;
                $("a[href='pdfFile']").attr("href", "" + url + "");

            }
        });


        //   alert("Hello " + claim + " " + pd_id);
    });


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


    $("#claim").click(function() {


        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        var policy_details_id = $("#claim").val();
        // var pd_id = $("#policy-details-id").attr('value');
        var formTypeID = $("#cl-form-type-id").attr('value');

        $.ajax({
            url: "/getInsurerList",
            method: "get",
            dataType: "json",
            data: "policy_details_id=" + policy_details_id + "&formTypeID=" + formTypeID,
            success: function(res) {
                if (res) {
                    $('#cla_insurer_id').attr('pd', policy_details_id);
                    $('.form-new call-back-sect').css({ 'display': 'block' });
                    $("#cla_insurer_id").empty();
                    $("#cla_insurer_id").append('<option value="">Select Insurer</option>');
                    $.each(res, function(key, value) {
                        $("#cla_insurer_id").append('<option value="' + value['insurer_id'] + '">' + value['insurer_name'] + '</option>');
                    });

                } else {
                    $("#cla_insurer_id").empty();
                }

            }
        });


    });



    $("#cla_insurer_id").click(function() {

        var insurer_id = $("#cla_insurer_id").val();
        var formTypeID = $("#cl-form-type-id").attr('value');
        var pd_id = $("#cla_insurer_id").attr('pd');

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

                $("#ft-cl-download").attr("href", "pdfFile");
                $("#ft-cl-download").attr("download");
                $("#ft-cl-download").attr("target", "_blank");
                url = baseURL + "/storage/pdf/" + pdfFile;
                $("a[href='pdfFile']").attr("href", "" + url + "");

            }
        });


        //   alert("Hello " + claim + " " + pd_id);
    });


    $("#wording").click(function() {

        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        var policy_details_id = $("#wording").val();
        // var pd_id = $("#policy-details-id").attr('value');
        var formTypeID = $("#wd-form-type-id").attr('value');

        $.ajax({
            url: "/getInsurerList",
            method: "get",
            dataType: "json",
            data: "policy_details_id=" + policy_details_id + "&formTypeID=" + formTypeID,
            success: function(res) {
                if (res) {

                    $('#wd_insurer_id').attr('pd', policy_details_id);
                    $('.form-new call-back-sect').css({ 'display': 'block' });
                    $("#wd_insurer_id").empty();
                    $("#wd_insurer_id").append('<option value="" >Select Insurer</option>');
                    $.each(res, function(key, value) {
                        $("#wd_insurer_id").append('<option value="' + value['insurer_id'] + '">' + value['insurer_name'] + '</option>');
                    });

                } else {
                    $("#wd_insurer_id").empty();
                }

            }
        });


    });


    $("#wd_insurer_id").click(function() {

        var insurer_id = $("#wd_insurer_id").val();
        var formTypeID = $("#wd-form-type-id").attr('value');
        var pd_id = $("#wd_insurer_id").attr('pd');

        $.ajax({
            url: "/pdfdownload",
            method: "get",
            dataType: "json",
            data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
            processData: false,
            contentType: false,
            success: function(data) {

                var pdfFile = data.file;
                $("#ft-wd-download").attr("href", "pdfFile");
                $("#ft-wd-download").attr("download");
                $("#ft-wd-download").attr("target", "_blank");
                url = baseURL + "/storage/pdf/" + pdfFile;
                $("a[href='pdfFile']").attr("href", "" + url + "");
            }
        });


        //   alert("Hello " + claim + " " + pd_id);
    });


    $("#proposal").click(function() {

        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        var policy_details_id = $("#proposal").val();
        // var pd_id = $("#policy-details-id").attr('value');
        var formTypeID = $("#pro-form-type-id").attr('value');

        $.ajax({
            url: "/getInsurerList",
            method: "get",
            dataType: "json",
            data: "policy_details_id=" + policy_details_id + "&formTypeID=" + formTypeID,
            success: function(res) {
                if (res) {

                    $('#pro_insurer_id').attr('pd', policy_details_id);
                    $('.form-new call-back-sect').css({ 'display': 'block' });
                    $("#pro_insurer_id").empty();
                    $("#pro_insurer_id").append('<option value="" >Select Insurer</option>');
                    $.each(res, function(key, value) {
                        $("#pro_insurer_id").append('<option value="' + value['insurer_id'] + '">' + value['insurer_name'] + '</option>');
                    });

                } else {
                    $("#pro_insurer_id").empty();
                }

            }
        });


    });


    $("#pro_insurer_id").click(function() {

        var insurer_id = $("#pro_insurer_id").val();
        var formTypeID = $("#pro-form-type-id").attr('value');
        var pd_id = $("#pro_insurer_id").attr('pd');

        $.ajax({
            url: "/pdfdownload",
            method: "get",
            dataType: "json",
            data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
            processData: false,
            contentType: false,
            success: function(data) {

                var pdfFile = data.file;
                $("#ft-pr-download").attr("href", "pdfFile");
                $("#ft-pr-download").attr("download");
                $("#ft-pr-download").attr("target", "_blank");
                url = baseURL + "/storage/pdf/" + pdfFile;
                $("a[href='pdfFile']").attr("href", "" + url + "");
            }
        });


        //   alert("Hello " + claim + " " + pd_id);
    });



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



    $('#house_type').change(function() {
        var house_type = $(this).val();
        //   $('#serchFactory').attr('value', '');
        //  $('#serchFactory').reset();

        if (house_type == '1') {

            $('.Work-fire').css({ 'display': 'block' });
            $('.type-ware').css({ 'display': 'none' });
            //$('#serchFactory').removeAttr('value');


        }

        if (house_type == '2') {
            $('.type-ware').css({ 'display': 'block' });
            $('.Work-fire').css({ 'display': 'block' });

        }
    });

    $("#Feedback .close").on("click", function(event) {
        event.preventDefault();
        $("#Feedback #feedback").parsley('reset').destroy();
        $("#Feedback #feedback").parsley();
        $("#Feedback #feedback").trigger("reset");
   
    });

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
                beforeSend: function() {
                    // $("#Feedback").hide();
                    // $("#close").hide();
                },
                success: function(data) {
                    $("#feedback").trigger("reset");
                    // $('#msg').html('Thank you for your feedback!');
                    if(data.status == 'true'){
                        $('#msg').html('Thank you for your feedback!');
                    }else{
                        for (const [key, value] of Object.entries(data.message )) {
                            $("#feedback .data_error_"+key ).remove();
                            if (typeof value === 'string') {
                                $("#feedback ."+key+"_" ).after("<span class='text-danger data_error_"+key+"'>"+value+ "</br></span>");
                            } else {
                                for (const [key1, value1] of Object.entries(value )) {
                                  $("#feedback ."+key+"_" ).after("<span class='text-danger data_error_"+key+"'>"+value1+ "</br></span>");
                                }
                            }
                        }
                    }
                }
            });
        }

    });


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
                beforeSend: function() {
                    // $("#callback").hide();
                },
                success: function(data) {
                    $("#callback").trigger("reset");
                    if(data.status == true){
                        $('#msgcallback').html('Our executive contact you shortly! Thanks');
                    }else{
                        if (typeof value === 'string') {
                            $("#callback ."+key+"_" ).after("<span class='text-danger data_error_"+key+"'>"+value+ "</br></span>");
                        } else {
                            for (const [key1, value1] of Object.entries(value )) {
                              $("#callback ."+key+"_" ).after("<span class='text-danger data_error_"+key+"'>"+value1+ "</br></span>");
                            }
                        }
                    }

                }
            });
        }

    });

    $("#openModal-about .close").on("click", function(event) {
        event.preventDefault();
        $("#callback").parsley('reset').destroy();
        $("#callback").parsley();
        $("#callback").trigger("reset");
   
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



    $(".media_sent_email form").parsley();
    $(".media_sent_email form").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        // console.log(formData);
        if ($(this).parsley().isValid()) {
            $.ajax({
                url: "/sent-email-to-user",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {
                    // $("#callback").hide();
                },
                success: function(data) {
                    $("#" + data.formClass + " form").html('<strong>This article have sent on your email.</strong>');

                }
            });
        }

    });

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
        var keywords =  $(".search_keywords").val().toLowerCase();
        if(keywords != ''){
            var checlkattr= $("#box-container "+tabName).attr('data-checktitle');
            $("#box-container "+tabName).each(function(i,a) {
                $.each($("#box-container "+tabName + " div"),function(i,a){
                    if($(this).attr('data-checktitle') != undefined) {
                        var res = $(this).attr('data-checktitle').toLowerCase().search(keywords);
                        if(res != -1){
                            $(a).show();

                        }else{
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
        var keywords =  $(".search_keywords").val().toLowerCase();
        if(keywords != ''){
            var checlkattr= $("#box-container "+tabName).attr('data-checktitle');
            $("#box-container "+tabName).each(function(i,a) {
                $.each($("#box-container "+tabName + " div"),function(i,a){
                    if($(this).attr('data-checktitle') != undefined) {
                        var res = $(this).attr('data-checktitle').toLowerCase().search(keywords);
                        if(res != -1){
                            $(a).show();

                        }else{
                            $(a).hide();
                        }
                    }
                })
            })
      }else{
        var checlkattr= $("#box-container "+tabName).attr('data-checktitle');
        $("#box-container "+tabName).each(function(i,a) {
            $.each($("#box-container "+tabName + " div"),function(i,a){
                if($(this).attr('data-checktitle') != undefined) {
                        $(a).show();
                }
            })
        })
      }

    });

    $("#myBtnContainer ul li a").click(function() {
        // console.log('click b');
            var tabName = $(this).attr('href');
            var checlkattr= $("#box-container "+tabName).attr('data-checktitle');
            $("#box-container "+tabName).each(function(i,a) {
                $.each($("#box-container "+tabName + " div"),function(i,a){
                    console.log(a);

                   $(a).show();
                })
            })

    });


});