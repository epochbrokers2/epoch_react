// jQuery(document).ready(function($) {


//     /**
//      * custome page form validation
//      *  
//      * @author Hari Yadav
//      * 
//      */


//     // Pagination //
//     $(function() {
//         $('body').on('click', '.pagination a', function(e) {
//             e.preventDefault();
//             $('#load').append('<img style="position: absolute; left: 0; top: 0; z-index: 10000;" src="https://i.imgur.com/v3KWF05.gif />');
//             var url = $(this).attr('href');
//             window.history.pushState("", "", url);
//             loadPosts(url);
//         });

//         function loadPosts(url) {

//             $.ajax({
//                 url: url
//             }).done(function(data) {
//                 $('#table_data').html(data);
//             }).fail(function() {
//                 console.log("Failed to load data!");
//             });
//         }
//     });

//     // End Pagination datat 

//     $("#quote").parsley();
//     $("#quote").on("submit", function(event) {

//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         var policy_id = $("#policy_id").val();

//         if ($("#quote").parsley().isValid()) {
//             $.ajax({
//                 url: "/save-quote",
//                 method: "POST",
//                 data: formData,
//                 dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     $("#home").removeClass("show");
//                     $("#home").removeClass("active");
//                     $("#liId").addClass("tab-active");
//                 },
//                 success: function(data) {

//                     if (policy_id == 1) {
//                         $('.member-tab,.memb-tab').css({ 'display': 'block' });
//                         $('.con-info, .contact-info').css({ 'display': 'none' });
//                         $('.memb-tab').addClass('current');
//                         $('.con-info').removeClass('current');
//                     } else if (policy_id == 2) {
//                         window.location.replace(baseURL + "/demography/group-personal-accident-policy");
//                     } else if (policy_id == 3) {
//                         window.location.replace(baseURL + "/standard-fire-demo-graphy");
//                     } else if (policy_id == 25) {
//                         window.open("http://online.epochbrokers.com/car/input?enquiry_id=2021061178893", '_blank');
//                         //window.location.replace(baseURL +"/standard-fire-demo-graphy");
//                     } else if (policy_id == 27) {
//                         window.open("http://online.epochbrokers.com/car/input?enquiry_id=2021061178893", '_blank');

//                     } else if (policy_id == 28) {
//                         window.open("http://online.epochbrokers.com/bike/input?enquiry_id=2021061174188", '_blank');

//                     } else if (policy_id == 29) {
//                         window.open("http://online.epochbrokers.com/mediclaim/input?enquiry_id=2021061191604", '_blank');
//                     } else if (policy_id == 30) {
//                         window.open("http://online.epochbrokers.com/top_up/input?enquiry_id=2021061169227", '_blank');

//                     } else if (policy_id == 31) {
//                         window.open("http://online.epochbrokers.com/travel/input?enquiry_id=2021061199031", '_blank');

//                     } else if (policy_id == 34) {
//                         window.open("http://online.epochbrokers.com/term/input?enquiry_id=2021061177679", '_blank');

//                     } else {
//                         // $("#msg").html('Thank you for contacting us! our executive will connnect you shortly');
//                         swal("Our executive will connnect you shortly!", "", "success");
//                     }
//                 }
//             });
//         }

//     });



//     $("#demography").parsley();
//     $("#demography").on("submit", function(event) {

//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         // var policy_id = $("#policy_id").val(); 

//         if ($("#demography").parsley().isValid()) {
//             $.ajax({
//                 url: "/save-demography",
//                 method: "POST",
//                 data: formData,
//                 dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {

//                 },
//                 success: function(data) {

//                     if (data.status == 'true') {
//                         window.location.replace(baseURL + "/calculator/employees/group-health-insurance-policy");
//                     } else {
//                         // swal(data.message, "", "error");
//                         // alert(data.message);
//                         swal(data.message);
//                         return false;
//                     }

//                 }
//             });
//         }

//     });

//     function download(downloadURL) {
//         location = downloadURL;
//     }


//     $("#insurer_id").click(function() {

//         var insurer_id = $("#insurer_id").val();
//         var pd_id = $("#policy-details-id").attr('value');
//         var formTypeID = $("#form-type-id").attr('value');

//         $.ajax({
//             url: "/pdfdownload",
//             method: "get",
//             dataType: "json",
//             data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
//             processData: false,
//             contentType: false,
//             success: function(data) {
//                 // console.log(data.file); 

//                 var pdfFile = data.file;

//                 $("#download").attr("href", "pdfFile");
//                 $("#download").attr("download");
//                 $("#download").attr("target", "_blank");

//                 url = baseURL + "/storage/pdf/" + pdfFile;
//                 $("a[href='pdfFile']").attr("href", "" + url + "");

//             }
//         });

//     });


//     $("#pw_insurer_id").click(function() {

//         var insurer_id = $("#pw_insurer_id").val();
//         var pd_id = $("#pw-policy-details-id").attr('value');
//         var formTypeID = $("#pw-form-type-id").attr('value');

//         $.ajax({
//             url: "/pdfdownload",
//             method: "get",
//             dataType: "json",
//             data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
//             processData: false,
//             contentType: false,
//             success: function(data) {
//                 //console.log(data.file); 

//                 var pdfFile = data.file;

//                 $("#pw-download").attr("href", "pdfFile");
//                 $("#pw-download").attr("download");
//                 $("#pw-download").attr("target", "_blank");

//                 url = baseURL + "/storage/pdf/" + pdfFile;
//                 $("a[href='pdfFile']").attr("href", "" + url + "");

//             }
//         });


//         //   alert("Hello " + claim + " " + pd_id);
//     });


//     $("#cl_insurer_id").click(function() {

//         var insurer_id = $("#cl_insurer_id").val();
//         var pd_id = $("#cl-policy-details-id").attr('value');
//         var formTypeID = $("#cl-form-type-id").attr('value');

//         $.ajax({
//             url: "/pdfdownload",
//             method: "get",
//             dataType: "json",
//             data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
//             processData: false,
//             contentType: false,
//             success: function(data) {
//                 //console.log(data.file); 

//                 var pdfFile = data.file;

//                 $("#cl-download").attr("href", "pdfFile");
//                 $("#cl-download").attr("download");
//                 $("#cl-download").attr("target", "_blank");
//                 url = baseURL + "/storage/pdf/" + pdfFile;
//                 $("a[href='pdfFile']").attr("href", "" + url + "");

//             }
//         });


//         //   alert("Hello " + claim + " " + pd_id);
//     });


//     $("#nh_insurer_id").click(function() {

//         var insurer_id = $("#nh_insurer_id").val();
//         var pd_id = $("#nh-policy-details-id").attr('value');
//         var formTypeID = $("#nh-form-type-id").attr('value');

//         $.ajax({
//             url: "/pdfdownload",
//             method: "get",
//             dataType: "json",
//             data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
//             processData: false,
//             contentType: false,
//             success: function(data) {
//                 //console.log(data.file); 

//                 var pdfFile = data.file;

//                 $("#nh-download").attr("href", "pdfFile");
//                 $("#nh-download").attr("download");
//                 $("#nh-download").attr("target", "_blank");
//                 url = baseURL + "/storage/pdf/" + pdfFile;
//                 $("a[href='pdfFile']").attr("href", "" + url + "");
//             }
//         });

//         //   alert("Hello " + claim + " " + pd_id);
//     });


//     $("#claim").click(function() {


//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         var policy_details_id = $("#claim").val();
//         // var pd_id = $("#policy-details-id").attr('value');
//         var formTypeID = $("#cl-form-type-id").attr('value');

//         $.ajax({
//             url: "/getInsurerList",
//             method: "get",
//             dataType: "json",
//             data: "policy_details_id=" + policy_details_id + "&formTypeID=" + formTypeID,
//             success: function(res) {
//                 if (res) {
//                     $('#cla_insurer_id').attr('pd', policy_details_id);
//                     $('.form-new call-back-sect').css({ 'display': 'block' });
//                     $("#cla_insurer_id").empty();
//                     $("#cla_insurer_id").append('<option value="">Select Insurer</option>');
//                     $.each(res, function(key, value) {
//                         $("#cla_insurer_id").append('<option value="' + value['insurer_id'] + '">' + value['insurer_name'] + '</option>');
//                     });

//                 } else {
//                     $("#cla_insurer_id").empty();
//                 }

//             }
//         });


//     });



//     $("#cla_insurer_id").click(function() {

//         var insurer_id = $("#cla_insurer_id").val();
//         var formTypeID = $("#cl-form-type-id").attr('value');
//         var pd_id = $("#cla_insurer_id").attr('pd');

//         $.ajax({
//             url: "/pdfdownload",
//             method: "get",
//             dataType: "json",
//             data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
//             processData: false,
//             contentType: false,
//             success: function(data) {
//                 //console.log(data.file); 

//                 var pdfFile = data.file;

//                 $("#ft-cl-download").attr("href", "pdfFile");
//                 $("#ft-cl-download").attr("download");
//                 $("#ft-cl-download").attr("target", "_blank");
//                 url = baseURL + "/storage/pdf/" + pdfFile;
//                 $("a[href='pdfFile']").attr("href", "" + url + "");

//             }
//         });


//         //   alert("Hello " + claim + " " + pd_id);
//     });


//     $("#wording").click(function() {

//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         var policy_details_id = $("#wording").val();
//         // var pd_id = $("#policy-details-id").attr('value');
//         var formTypeID = $("#wd-form-type-id").attr('value');

//         $.ajax({
//             url: "/getInsurerList",
//             method: "get",
//             dataType: "json",
//             data: "policy_details_id=" + policy_details_id + "&formTypeID=" + formTypeID,
//             success: function(res) {
//                 if (res) {

//                     $('#wd_insurer_id').attr('pd', policy_details_id);
//                     $('.form-new call-back-sect').css({ 'display': 'block' });
//                     $("#wd_insurer_id").empty();
//                     $("#wd_insurer_id").append('<option value="" >Select Insurer</option>');
//                     $.each(res, function(key, value) {
//                         $("#wd_insurer_id").append('<option value="' + value['insurer_id'] + '">' + value['insurer_name'] + '</option>');
//                     });

//                 } else {
//                     $("#wd_insurer_id").empty();
//                 }

//             }
//         });


//     });


//     $("#wd_insurer_id").click(function() {

//         var insurer_id = $("#wd_insurer_id").val();
//         var formTypeID = $("#wd-form-type-id").attr('value');
//         var pd_id = $("#wd_insurer_id").attr('pd');

//         $.ajax({
//             url: "/pdfdownload",
//             method: "get",
//             dataType: "json",
//             data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
//             processData: false,
//             contentType: false,
//             success: function(data) {

//                 var pdfFile = data.file;
//                 $("#ft-wd-download").attr("href", "pdfFile");
//                 $("#ft-wd-download").attr("download");
//                 $("#ft-wd-download").attr("target", "_blank");
//                 url = baseURL + "/storage/pdf/" + pdfFile;
//                 $("a[href='pdfFile']").attr("href", "" + url + "");
//             }
//         });


//         //   alert("Hello " + claim + " " + pd_id);
//     });


//     $("#proposal").click(function() {

//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         var policy_details_id = $("#proposal").val();
//         // var pd_id = $("#policy-details-id").attr('value');
//         var formTypeID = $("#pro-form-type-id").attr('value');

//         $.ajax({
//             url: "/getInsurerList",
//             method: "get",
//             dataType: "json",
//             data: "policy_details_id=" + policy_details_id + "&formTypeID=" + formTypeID,
//             success: function(res) {
//                 if (res) {

//                     $('#pro_insurer_id').attr('pd', policy_details_id);
//                     $('.form-new call-back-sect').css({ 'display': 'block' });
//                     $("#pro_insurer_id").empty();
//                     $("#pro_insurer_id").append('<option value="" >Select Insurer</option>');
//                     $.each(res, function(key, value) {
//                         $("#pro_insurer_id").append('<option value="' + value['insurer_id'] + '">' + value['insurer_name'] + '</option>');
//                     });

//                 } else {
//                     $("#pro_insurer_id").empty();
//                 }

//             }
//         });


//     });


//     $("#pro_insurer_id").click(function() {

//         var insurer_id = $("#pro_insurer_id").val();
//         var formTypeID = $("#pro-form-type-id").attr('value');
//         var pd_id = $("#pro_insurer_id").attr('pd');

//         $.ajax({
//             url: "/pdfdownload",
//             method: "get",
//             dataType: "json",
//             data: "insurer_id=" + insurer_id + "&pd_id=" + pd_id + "&formTypeID=" + formTypeID,
//             processData: false,
//             contentType: false,
//             success: function(data) {

//                 var pdfFile = data.file;
//                 $("#ft-pr-download").attr("href", "pdfFile");
//                 $("#ft-pr-download").attr("download");
//                 $("#ft-pr-download").attr("target", "_blank");
//                 url = baseURL + "/storage/pdf/" + pdfFile;
//                 $("a[href='pdfFile']").attr("href", "" + url + "");
//             }
//         });


//         //   alert("Hello " + claim + " " + pd_id);
//     });



//     $('#state_id').change(function() {
//         var state_id = $(this).val();

//         $.ajax({
//             url: "/getCity",
//             method: "get",
//             dataType: "json",
//             data: "state_id=" + state_id,
//             processData: false,
//             contentType: false,
//             success: function(data) {

//                 if (data) {
//                     $("#city").empty();
//                     $("#city").append('<option>Select City</option>');
//                     $.each(data, function(key, value) {
//                         $("#city").append('<option value="' + key + '">' + value + '</option>');
//                     });

//                 } else {
//                     $("#city").empty();
//                 }

//             }
//         });

//     });



//     $('#house_type').change(function() {
//         var house_type = $(this).val();
//         //   $('#serchFactory').attr('value', '');
//         //  $('#serchFactory').reset();

//         if (house_type == '1') {

//             $('.Work-fire').css({ 'display': 'block' });
//             $('.type-ware').css({ 'display': 'none' });
//             //$('#serchFactory').removeAttr('value');


//         }

//         if (house_type == '2') {
//             $('.type-ware').css({ 'display': 'block' });
//             $('.Work-fire').css({ 'display': 'block' });

//         }
//     });



//     $("#feedback").parsley();
//     $("#feedback").on("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

//         if ($("#feedback").parsley().isValid()) {
//             $.ajax({
//                 url: "/feedback",
//                 method: "POST",
//                 data: formData,
//                 dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#Feedback").hide();
//                     // $("#close").hide();
//                 },
//                 success: function(data) {
//                     $("#feedback").trigger("reset");
//                     // $('#Feedback').modal('hide');

//                     $('#msg').html('Thank you for your feedback!');

//                     //  alert("Thank you for your feedback ! To help us best serve you and others");
//                 }
//             });
//         }

//     });


//     $("#callback").parsley();
//     $("#callback").on("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

//         if ($("#callback").parsley().isValid()) {
//             $.ajax({
//                 url: "/callback",
//                 method: "POST",
//                 data: formData,
//                 dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     $("#callback").trigger("reset");
//                     $('#msgcallback').html('Our executive contact you shortly! Thanks');
//                     // alert("Thank you for visiting us today! To help us best serve you and others");

//                 }
//             });
//         }

//     });


//     $("#carrier").parsley();
//     $("#carrier").on("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

//         if ($("#carrier").parsley().isValid()) {
//             $.ajax({
//                 url: "/store-career",
//                 method: "POST",
//                 data: formData,
//                 dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     $("#carrier").trigger("reset");
//                     $('#msgccarrier').html('<strong>Thank you for visiting us today! Our HR team will connect you shortly! </strong>');

//                 }
//             });
//         }

//     });



//     $("#media_sent_email form").parsley();
//     $("#media_sent_email form").on("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         // console.log(formData);
//         if ($(this).parsley().isValid()) {
//             $.ajax({
//                 url: "/sent-email-to-user",
//                 method: "POST",
//                 data: formData,
//                 dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     $("#media_sent_email #"+data.formClass+" form").html('<strong>This article have sent on your email.</strong>');

//                 }
//             });
//         }

//     });


//     $("#policy_any").parsley();
//     $("#policy_any").on("submit", function(event) {

//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

//         if ($("#policy_any").parsley().isValid()) {
//             $.ajax({
//                 url: "/policyanylysed",
//                 method: "POST",
//                 data: formData,
//                 dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#Feedback").hide();
//                     // $("#close").hide();
//                 },
//                 success: function(data) {
//                     $("#policy_any").trigger("reset");
//                     $('#plmsg').html('Thank you for contacting us!');
//                 }
//             });
//         }

//     });



//     $("#stateId").change(function() {
//         var id = $('#stateId').val();
//         var hitURL = baseURL + '/getCities';
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         $('#ajax').html('');
//         $.ajax({
//             url: hitURL,
//             type: "GET",
//             data: { value: id },
//             dataType: "json",
//             beforeSend: function() {

//             },
//             success: function(res) {
//                 if (res) {
//                     $("#cityId").empty();
//                     $("#cityId").append('<option value="">Select City</option>');
//                     $.each(res, function(key, value) {
//                         $("#cityId").append('<option value="' + key + '">' + value + '</option>');
//                     });

//                 } else {
//                     $("#cityId").empty();
//                 }

//             }
//         });


//     });


//     $("#cityId").change(function() {
//         var id = $('#cityId').val();
//         var hitURL = baseURL + '/getWindshields';
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

//         $.ajax({
//             url: hitURL,
//             type: "GET",
//             data: { id: id },
//             dataType: "json",
//             beforeSend: function() {

//             },
//             success: function(data) {
//                 $('#ajax').html(data.html);
//             }
//         });


//     });



//     $("#medicalExpenses").change(function() {

//         var option = $("#medicalExpenses").val();
//         var calc_id = $("#gpc_calc_id").attr('value');
//         calc_id = parseInt(calc_id);
//         // var changeVal = $("#addBaseValeOpt").attr('value'); // base price  
//         // changeVal = parseInt(changeVal);
//         // var floterval = $("#finalAmt").attr('value');
//         // floterval = parseInt(floterval);

//         $.ajax({
//             url: "/medicalExpence",
//             method: "get",
//             data: "opt=" + option + "&calc_id=" + calc_id,
//             processData: false,
//             contentType: false,
//             success: function(data) {
//                 $("#finalAmt").html(data);
//             }
//         });

//     });


//     //member login document upload

//     $("#mem_document_uploads").parsley();
//     $("#mem_document_uploads").on("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if ($("#mem_document_uploads").parsley().isValid()) {
//             $.ajax({
//                 url: "/member/document/store",
//                 method: "POST",
//                 data: formData,
//                 // dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     // console.log(data);
//                     if (data == 400) {
//                       $('#mem_document_uploads_message').html("<strong>Something went wrong!</strong>");
//                     }else{
//                         $('#mem_document_uploads').trigger("reset");
//                         $('#mem_document_uploads_message').html("<strong>This document have uploaded.</strong>");
//                         $("#document_table_find").html(data);
//                     }

//                 }
//             });
//         }

//     });


//     $("#document_table_find button").on("click", function(event) {
//         event.preventDefault();

//         var doc_id = $(this).attr('data-id');
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if (doc_id && doc_id != '') {
//             $.ajax({
//                 url: "/member/document/delete",
//                 method: "POST",
//                 data: { doc_id : doc_id },
//                 // dataType: "json",
//                 // processData: false,
//                 // contentType: false,
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     // console.log(data);
//                     if (data.status == true) {
//                         $("#document_table_find " + data.id).remove();
//                         $('#mem_document_delete_message').html("<strong>This document have deleted.</strong>");

//                     }else{
//                         $('#mem_document_delete_message').html("<strong>Something went wrong!</strong>");

//                     }

//                 }
//             });
//         }

//     });

//     $("#document_table_find a").on("click", function(event) {
//         event.preventDefault();
//         var doc_id = $(this).attr('data-id');
//         let obj = JSON.parse(doc_id);
//         // console.log(obj);
//         $("#uplateDocument .document_name").val(obj.document_name);
//         $("#uplateDocument .id").val(obj.id);
//         $("#uplateDocument .file_name").val(obj.file);
//         $('#uplateDocument .document_type').val(obj.document_type).trigger('change');
//         $('#uplateDocument').modal('show');

//     });

//     $("#mem_document_update").parsley();
//     $("#mem_document_update").on("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if ($("#mem_document_update").parsley().isValid()) {
//             $.ajax({
//                 url: "/member/document/update",
//                 method: "POST",
//                 data: formData,
//                 // dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     console.log(data);
//                     if (data.status == true) {
//                         // console.log([data.id + " td:nth-child(1)" ,data.data]);
//                         $(data.id + " td:nth-child(2)").html(data.data.document_name);
//                         $(data.id + " td:nth-child(3)").html(data.data.type_name);
//                         $(data.id + " td:nth-child(4) a" ).attr('href',data.asset+ '/'+data.data.file);
//                         $(data.id + " td:nth-child(5) a" ).attr('data-id',JSON.stringify(data.data));

//                         $('#mem_document_update_message').html("<strong>This document have updated.</strong>");

//                     }else{
//                         $('#mem_document_update_message').html("<strong>Something went wrong!</strong>");

//                     }

//                 }
//             });
//         }

//     });

//     $("#search_form").parsley();
//     $("#search_form").on("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if ($("#search_form").parsley().isValid()) {
//             $.ajax({
//                 url: "/member/document/search",
//                 method: "POST",
//                 data: formData,
//                 // dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     if (data == 400) {

//                         $('#mem_document_delete_message').html("<strong>Something went wrong!</strong>");
//                     }else{
//                         $('#document_table_find').html(data);
//                         $('#mem_document_delete_message').html("<strong>Search result : </strong>");
//                     }

//                 }
//             });
//         }

//     });


//     $("#search_form_reset").on("click", function(event) {
//         event.preventDefault();
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if ($("#search_form").parsley().isValid()) {
//             $.ajax({
//                 url: "/member/document/reset",
//                 method: "POST",
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     if (data == 400) {
//                         $('#mem_document_delete_message').html("<strong>Something went wrong!</strong>");
//                     }else{
//                         $("#search_form").trigger("reset");
//                         $('#document_table_find').html(data);
//                         $('#mem_document_delete_message').html("<strong>Search result : </strong>");
//                     }

//                 }
//             });
//         }

//     });

//         //member login ploicy document upload

//     $("#mem_policy_document_uploads").parsley();
//     $("#mem_policy_document_uploads").on("submit", function(event) {
//             event.preventDefault();
//             var formData = new FormData(this);
//             $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//             if ($("#mem_policy_document_uploads").parsley().isValid()) {
//                 $.ajax({
//                     url: "/member/policy-document/store",
//                     method: "POST",
//                     data: formData,
//                     processData: false,
//                     contentType: false,
//                     beforeSend: function() {
//                         // $("#callback").hide();
//                     },
//                     success: function(data) {
//                         console.log(data);
//                         if (data == 400) {
//                            $('#mem_document_uploads_message').html("<strong>Something went wrong!</strong>");
    
//                         }else{
//                           $('#mem_policy_document_uploads').trigger("reset");
//                           $('#mem_document_uploads_message').html("<strong>This policy-document have uploaded.</strong>");
//                           $("#policy_document_table_find").html(data);
//                         }
    
//                     }
//                 });
//             }
    
//     });


//     $("#policy_document_table_find button").on("click", function(event) {
//         event.preventDefault();

//         var doc_id = $(this).attr('data-id');
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if (doc_id && doc_id != '') {
//             $.ajax({
//                 url: "/member/policy-document/delete",
//                 method: "POST",
//                 data: { doc_id : doc_id },
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     if (data.status == true) {
//                         $("#policy_document_table_find " + data.id).remove();
//                         $('#mem_document_delete_message').html("<strong>This document have deleted.</strong>");

//                     }else{
//                         $('#mem_document_delete_message').html("<strong>Something went wrong!</strong>");

//                     }

//                 }
//             });
//         }

//     });


//     $("#search_city").on("change", function(event) {
//         event.preventDefault();

//         var state_id = $(this).val();
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if (state_id && state_id != '') {
//             $.ajax({
//                 url: "/member/document/claim/search-city",
//                 method: "POST",
//                 data: { state_id : state_id },
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     if (data == '404') {
//                         swal({
//                             // title: "Good job!",
//                             text: "404 | No match found.",
//                             icon: "info",
//                           });

//                     }else if(data == '400'){
//                         swal({
//                             // title: "Good job!",
//                             text: "Something went wrong.",
//                             icon: "error",
//                           });
//                         // alert('Something went wrong.')

//                     }else{
//                         $('#city').html(data);

//                     }

//                 }
//             });
//         }

//     });


//     $("#claim_form_submit").parsley();
//     $("#claim_form_submit").on("submit", function(event) {
//             event.preventDefault();
//             var formData = new FormData(this);
//             $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//             if ($("#claim_form_submit").parsley().isValid()) {
//                 $.ajax({
//                     url: "/member/document/claim/store",
//                     method: "POST",
//                     data: formData,
//                     processData: false,
//                     contentType: false,
//                     beforeSend: function() {
//                         // $("#callback").hide();
//                     },
//                     success: function(data) {
//                         console.log(data);
//                         if (data.status == false) {
//                             swal({
//                                 // title: "Good job!",
//                                 text: "Something went wrong.",
//                                 icon: "error",
//                               });
    
//                         }else{
//                             swal({
//                                 // title: "Good job!",
//                                 text: "Claim registrated.",
//                                 icon: "success",
//                               });
//                         }
    
//                     }
//                 });
//             }
    
//     });



//      //member login claim file document upload

//      $("#mem_claim_file_document_upload").parsley();
//      $("#mem_claim_file_document_upload").on("submit", function(event) {
//          event.preventDefault();
//          var formData = new FormData(this);
//          $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//          if ($("#mem_claim_file_document_upload").parsley().isValid()) {
//              $.ajax({
//                  url: "/member/document/claim/store",
//                  method: "POST",
//                  data: formData,
//                  // dataType: "json",
//                  processData: false,
//                  contentType: false,
//                  beforeSend: function() {
//                      // $("#callback").hide();
//                  },
//                  success: function(data) {
//                      // console.log(data);
//                      if (data == 400) {
//                        $('#mem_document_uploads_message').html("<strong>Something went wrong!</strong>");
//                      }else{
//                          $('#mem_claim_file_document_upload').trigger("reset");
//                          $('#mem_document_uploads_message').html("<strong>This claim document have uploaded.</strong>");
//                          $("#claim_document_table_find").html(data);
//                      }
 
//                  }
//              });
//          }
 
//      });


//      $("#claim_document_table_find button").on("click", function(event) {
//         event.preventDefault();

//         var doc_id = $(this).attr('data-id');
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if (doc_id && doc_id != '') {
//             $.ajax({
//                 url: "/member/document/claim/delete",
//                 method: "POST",
//                 data: { doc_id : doc_id },
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     // console.log(data);
//                     if (data.status == true) {
//                         $("#claim_document_table_find " + data.id).remove();
//                         $('#mem_document_delete_message').html("<strong>This document have deleted.</strong>");

//                     }else{
//                         $('#mem_document_delete_message').html("<strong>Something went wrong!</strong>");

//                     }

//                 }
//             });
//         }

//     });


//     $("#claim_document_table_find a").on("click", function(event) {
//         event.preventDefault();
//         var doc_id = $(this).attr('data-id');
//         let obj = JSON.parse(doc_id);
//         // console.log(obj);
//         $("#uplateDocument .document_name").val(obj.claim_name);
//         $("#uplateDocument .id").val(obj.id);
//         $("#uplateDocument .file_name").val(obj.file);
//         $('#uplateDocument .document_type').val(obj.claim_type_id).trigger('change');
//         $('#uplateDocument').modal('show');

//     });


//     $("#mem_claim_file_document_update").parsley();
//     $("#mem_claim_file_document_update").on("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if ($("#mem_claim_file_document_update").parsley().isValid()) {
//             $.ajax({
//                 url: "/member/document/claim/update",
//                 method: "POST",
//                 data: formData,
//                 // dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     console.log(data);
//                     if (data.status == true) {
//                         // console.log([data.id + " td:nth-child(1)" ,data.data]);
//                         $(data.id + " td:nth-child(2)").html(data.data.claim_name);
//                         $(data.id + " td:nth-child(3)").html(data.data.type_name);
//                         $(data.id + " td:nth-child(4) a" ).attr('href',data.asset+ '/'+data.data.file);
//                         $(data.id + " td:nth-child(5) a" ).attr('data-id',JSON.stringify(data.data));

//                         $('#mem_document_update_message').html("<strong>This claim document have updated.</strong>");

//                     }else{
//                         $('#mem_document_update_message').html("<strong>Something went wrong!</strong>");

//                     }

//                 }
//             });
//         }

//     });


//     $("#claim_document_search_form").parsley();
//     $("#claim_document_search_form").on("submit", function(event) {
//         event.preventDefault();
//         var formData = new FormData(this);
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if ($("#claim_document_search_form").parsley().isValid()) {
//             $.ajax({
//                 url: "/member/document/claim/search",
//                 method: "POST",
//                 data: formData,
//                 // dataType: "json",
//                 processData: false,
//                 contentType: false,
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     if (data == 400) {
//                         $('#mem_document_delete_message').html("<strong>Something went wrong!</strong>");
//                     }else{
//                         $('#claim_document_table_find').html(data);
//                         $('#mem_document_delete_message').html("<strong>Search result : </strong>");
//                     }

//                 }
//             });
//         }

//     });


//     $("#claim_document_search_form_reset").on("click", function(event) {
//         event.preventDefault();
//         $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
//         if ($("#claim_document_search_form_reset").parsley().isValid()) {
//             $.ajax({
//                 url: "/member/document/claim/reset",
//                 method: "POST",
//                 beforeSend: function() {
//                     // $("#callback").hide();
//                 },
//                 success: function(data) {
//                     // console.log(data);
//                     if (data == 400) {
//                         $('#mem_document_delete_message').html("<strong>Something went wrong!</strong>");
//                     }else{
//                         $("#claim_document_search_form_reset").trigger("reset");
//                         $('#claim_document_table_find').html(data);
//                         $('#mem_document_delete_message').html("<strong>Search result : </strong>");
//                     }

//                 }
//             });
//         }

//     });


    


});