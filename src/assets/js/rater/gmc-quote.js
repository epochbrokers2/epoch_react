jQuery(document).ready(function($) { 

    $("#sid1").change(function() {
        $('#loading').show();
        var sid1 = $("#sid1").val();
        
        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/suminsured1",
            method: "get",
            data: "sid1=" + sid1 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt").html(data);
            }
        });

    });


    $("#sid2").change(function() {
        $('#loading').show();
        var sid2 = $("#sid2").val(); 

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/suminsured2",
            method: "get",
            data: "sid2=" + sid2 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        }); 

    });


    $("#sid3").change(function() {
        $('#loading').show();
        var sid3 = $("#sid3").val(); 

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/suminsured3",
            method: "get",
            data: "sid3=" + sid3 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });
    });



    $("#cap1").change(function() {
       
        $('#loading').show();
        var cap1 = $("#cap1").val();         

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/copayment1",
            method: "get",
            data: "cap1=" + cap1 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt").html(data);
            }
        });
    });


    $("#cap2").change(function() {
        
        $('#loading').show();
        var cap2 = $("#cap2").val();         

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/copayment2",
            method: "get",
            data: "cap2=" + cap2 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });
    });

    $("#cap3").change(function() {
        
        $('#loading').show();
        var cap3 = $("#cap3").val();         

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/copayment3",
            method: "get",
            data: "cap3=" + cap3 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });
    });



    $("#maternity1").change(function() {
      
        $('#loading').show();
        var maternity1 = $("#maternity1").val();         

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/maternity1",
            method: "get",
            data: "maternity1=" + maternity1 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {                 
                $('#loading').hide();
                $("#finalAmt").html(data);
            }
        });
    });


    $("#maternity2").change(function() {
      
        $('#loading').show();
        var maternity2 = $("#maternity2").val();         

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/maternity2",
            method: "get",
            data: "maternity2=" + maternity2 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {                 
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });
    });


    $("#maternity3").change(function() {
      
        $('#loading').show();
        var maternity3= $("#maternity3").val();         

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/maternity3",
            method: "get",
            data: "maternity3=" + maternity3 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {                 
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });
    });




    $("#cf1").change(function() {
      
        $('#loading').show();
        var cf1 = $("#cf1").val();         
         
        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/cf1",
            method: "get",
            data: "cf1=" + cf1 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {                 
                $('#loading').hide();
                $("#finalAmt").html(data);
            }
        });
    });


    $("#cf2").change(function() {
      
        $('#loading').show();
        var cf2 = $("#cf2").val();         
         
        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/cf2",
            method: "get",
            data: "cf2=" + cf2 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {                 
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });
    });


    $("#cf3").change(function() {
      
        $('#loading').show();
        var cf3 = $("#cf3").val();         
         
        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/cf3",
            method: "get",
            data: "cf3=" + cf3 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {                 
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });
    });




// Normal room rent capping 

    $("#normal1").change(function() { 
       
        $('#loading').show();
        var normal1 = $("#normal1").val();    

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/normal1",
            method: "get",
            data: "normal1=" + normal1 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt").html(data);
            }
        });
    });


    $("#normal2").change(function() { 
       
        $('#loading').show();
        var normal2 = $("#normal2").val();    

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/normal2",
            method: "get",
            data: "normal2=" + normal2 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });
    });


    $("#normal3").change(function() { 
       
        $('#loading').show();
        var normal3 = $("#normal3").val();    

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/normal3",
            method: "get",
            data: "normal3=" + normal3 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });
    });



    // Normal room rent capping 

    $("#icu1").change(function() { 
       
        $('#loading').show();
        var icu1 = $("#icu1").val();    

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/icu1",
            method: "get",
            data: "icu1=" + icu1 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt").html(data);
            }
        });
    });


    
    $("#icu2").change(function() { 
       
        $('#loading').show();
        var icu2 = $("#icu2").val();    

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/icu2",
            method: "get",
            data: "icu2=" + icu2 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });
    });


    $("#icu3").change(function() {        
        $('#loading').show();
        var icu3 = $("#icu3").val();    

        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/icu3",
            method: "get",
            data: "icu3=" + icu3 + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });
    });



   
    $("#spouse2").keyup(function(){

      
        $('#loading').show();
        var spouse2 = $("#spouse2").val(); 
        var id =  $("#spouse2").attr('idval'); 
        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);
    
        $.ajax({
            url: "/rater/spouse2",
            method: "get",
            data: "spouse2=" + spouse2 + "&id=" + id + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });
      });


    $("#spouse3").keyup(function(){
        $('#loading').show();
        var spouse3 = $("#spouse3").val(); 
        var id =  $("#spouse3").attr('idval'); 
        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);
    
        $.ajax({
            url: "/rater/spouse3",
            method: "get",
            data: "spouse3=" + spouse3 + "&id=" + id + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {                 
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });
    });



      $("#children2").keyup(function(){
      
        $('#loading').show();
        var children2 = $("#children2").val(); 
        var id =  $("#children2").attr('idval'); 
        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/children2",
            method: "get",
            data: "children2=" + children2 + "&id=" + id + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {
                 
                $('#loading').hide();
                $("#finalAmt2").html(data);
            }
        });
      });


    $("#children3").keyup(function(){         
        $('#loading').show();
        var children3 = $("#children3").val(); 
        var id =  $("#children3").attr('idval'); 
        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/children3",
            method: "get",
            data: "children3=" + children3 + "&id=" + id + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {                 
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });
    });

    $("#parents3").keyup(function(){         
        $('#loading').show();
        var parents3 = $("#parents3").val(); 
        var id =  $("#parents3").attr('idval'); 
        var quote_raters_id = $("#quote_raters_id").attr('value');
        quote_raters_id = parseInt(quote_raters_id);

        $.ajax({
            url: "/rater/parents3",
            method: "get",
            data: "parents3=" + parents3 + "&id=" + id + "&quote_raters_id=" + quote_raters_id,
            processData: false,
            contentType: false,
            success: function(data) {                 
                $('#loading').hide();
                $("#finalAmt3").html(data);
            }
        });
    });





const toggleRatioQuote = (val) => {
    if (val == '1') {
        $('.section_renewal').show();
    } else {
        $('.section_renewal').hide();
    }
}

const gmcQuoteRatio = (ratio) => {
    // if (val == '1') {
    //     $('.section_renewal').show();
    // } else {
    //     $('.section_renewal').hide();
    // }
    alert(ratio);
}

$("#rater_email_gmc").on("click", function(event) {
    event.preventDefault();
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });

        $.ajax({
            url: "/rater/gmc/email",
            method: "POST",
            dataType: "json",
            processData: false,
            contentType: false,
            beforeSend: function() { $('.epoch_spinner_all').show();  },
            success: function(data) {
                $('.epoch_spinner_all').hide();
                swal("", "Mail has been sent!", "success");
            }
        });

});


});