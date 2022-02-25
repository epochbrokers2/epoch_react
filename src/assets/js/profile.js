jQuery(document).ready(function($) {


    /**
     * custome page form validation member dashbaord
     *  
     * @author Vishal Gupta
     * 
     */

    $("#mem_document_uploads").parsley();
    $("#mem_document_uploads").on("submit", function(event) {
        event.preventDefault();
        $('#mem_document_uploads button').html('Uploading..');
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#mem_document_uploads").parsley().isValid()) {
            $.ajax({
                url: "/member/document/store",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    $('#mem_document_uploads button').html('Upload');
                    if (data.status == false) {
                        $("#mem_document_uploads_message").html('<span class="text-danger">' + data.message + '</span>');
                    } else {
                        $('#myTable').DataTable().ajax.reload();
                        $("#mem_document_uploads_message").html('<span class="text-success">' + data.message + '</span>');
                    }

                }
            });
        }
    });

    $(document).on("click", "#document_table_find .lasttd .uplateDocumentButton", function() {
        let modelid = $(this).attr('data-id');
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        $.ajax({
            url: "/member/document/single",
            method: "POST",
            data: { id: modelid },
            dataType: "json",
            // processData: false,
            // contentType: false,
            beforeSend: function() {},
            success: function(data) {
                if (data.status == true) {
                    $("#uplateDocument .document_name").val(data.result.document_name);
                    $("#uplateDocument .id").val(data.result.id);
                    $("#uplateDocument .file_name").val(data.result.file);
                    $('#uplateDocument .document_type').val(data.result.document_type).trigger('change');
                    $('#uplateDocument #downloadPolicy').attr('href', data.asset + '/' + data.result.file);
                    $("#mem_document_update_message").html('');
                    $("#uplateDocument").addClass('is-visible');
                } else {
                    swal({
                        title: data.message,
                        text: "Something went wrong",
                        icon: "error",
                    });
                }
            }
        });


    });


    $(document).on("click", "#document_table_find .lasttd .deleterow", function(event) {
        event.preventDefault();
        swal({
            title: 'Are you sure ',
            text: "want to delete ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3f51b5',
            cancelButtonColor: '#ff4081',
            confirmButtonText: 'Great ',
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "btn btn-danger",
                    closeModal: true,
                },
                confirm: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "btn btn-primary",
                    closeModal: true
                }
            }
        }).then((willDelete) => {
            if (willDelete) {
                var doc_id = $(this).attr('data-id');
                $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
                if (doc_id && doc_id != '') {
                    $.ajax({
                        url: "/member/document/delete",
                        method: "POST",
                        data: { doc_id: doc_id },
                        beforeSend: function() {
                            // $("#callback").hide();
                        },
                        success: function(data) {
                            if (data.status == true) {
                                swal({
                                    title: '',
                                    text: data.message,
                                    icon: 'success',
                                    confirmButtonColor: '#3f51b5',
                                    confirmButtonText: 'Great ',
                                    allowOutsideClick: false,
                                    buttons: {
                                        confirm: {
                                            text: "OK",
                                            value: true,
                                            visible: true,
                                            className: "btn btn-danger",
                                            closeModal: true
                                        }
                                    }
                                }).then((result) => {
                                    if (result) {
                                        $('#myTable').DataTable().ajax.reload();
                                    }
                                });

                            } else {
                                $('#mem_document_delete_message').html("<strong>Something went wrong!</strong>");

                            }

                        }
                    });
                }

            } else {

                //swal("Your imaginary file is safe!");
            }
        });
    });



    $("#mem_document_update").parsley();
    $(document).on("submit", "#mem_document_update", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $('#mem_document_update button').html('Updating..');
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($(this).parsley().isValid()) {
            $.ajax({
                url: "/member/document/update",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    $('#mem_document_update button').html('Update');
                    if (data.status == false) {
                        $("#mem_document_update_message").html('<span class="text-danger">' + data.message + '</span>');
                    } else {
                        $('#myTable').DataTable().ajax.reload();
                        $("#mem_document_update_message").html('<span class="text-success">' + data.message + '</span>');
                    }
                }
            });
        }

    });




    //policy doucments
    $("#mem_policy_document_uploads").parsley();
    $("#mem_policy_document_uploads").on("submit", function(event) {
        event.preventDefault();
        $('#mem_policy_document_uploads button').html('Uploading..');
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#mem_policy_document_uploads").parsley().isValid()) {
            $.ajax({
                url: "/member/policy-document/store",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    $('#mem_policy_document_uploads')[0].reset();
                    $('#mem_policy_document_uploads button').html('Upload');
                    if (data.status == false) {
                        $("#mem_document_uploads_message").html('<span class="text-danger">' + data.message + '</span>');
                    } else {
                        $('#myTable').DataTable().ajax.reload();
                        $("#mem_document_uploads_message").html('<span class="text-success">' + data.message + '</span>');
                    }

                }

            });
        }

    });

    $(document).on("click", "#policy_document_table_find .lasttd .deleterow", function(event) {
        event.preventDefault();
        swal({
            title: 'Are you sure ',
            text: "want to delete ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3f51b5',
            cancelButtonColor: '#ff4081',
            confirmButtonText: 'Great ',
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "btn btn-danger",
                    closeModal: true,
                },
                confirm: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "btn btn-primary",
                    closeModal: true
                }
            }
        }).then((willDelete) => {
            if (willDelete) {
                var doc_id = $(this).attr('data-id');
                $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
                if (doc_id && doc_id != '') {
                    $.ajax({
                        url: "/member/policy-document/delete",
                        method: "POST",
                        data: { doc_id: doc_id },
                        beforeSend: function() {},
                        success: function(data) {
                            if (data.status == true) {
                                swal({
                                    title: '',
                                    text: data.message,
                                    icon: 'success',
                                    confirmButtonColor: '#3f51b5',
                                    confirmButtonText: 'Great ',
                                    allowOutsideClick: false,
                                    buttons: {
                                        confirm: {
                                            text: "OK",
                                            value: true,
                                            visible: true,
                                            className: "btn btn-danger",
                                            closeModal: true
                                        }
                                    }
                                }).then((result) => {
                                    if (result) {
                                        $('#myTable').DataTable().ajax.reload();
                                    }
                                });

                            } else {
                                swal({
                                    title: "",
                                    text: "Something went wrong",
                                    icon: "error",
                                });

                            }

                        }
                    });
                }

            } else {

                //swal("Your imaginary file is safe!");
            }
        });

    });

    $(document).on("click", "#policy_document_table_find .lasttd .uplateDocumentButton", function() {
        let modelid = $(this).attr('data-id');
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        $.ajax({
            url: "/member/policy-document/single",
            method: "POST",
            data: { id: modelid },
            dataType: "json",
            // processData: false,
            // contentType: false,
            beforeSend: function() {},
            success: function(data) {
                console.log(data);
                if (data.status == true) {
                    $("#uplateDocumentPolicy .policy_no").val(data.result.policy_no);
                    $("#uplateDocumentPolicy .id").val(data.result.id);
                    $("#uplateDocumentPolicy .file_name").val(data.result.file);
                    $('#uplateDocumentPolicy .document_type').val(data.result.policy_type).trigger('change');
                    $('#uplateDocumentPolicy #downloadPolicy').attr('href', data.asset + '/' + data.result.file);
                    $("#mem_document_update_message").html('');
                    $("#uplateDocumentPolicy").addClass('is-visible');
                } else {
                    swal({
                        title: data.message,
                        text: "Something went wrong",
                        icon: "error",
                    });
                }
            }
        });


    });




    $("#mem_policy_document_update").parsley();
    $("#mem_policy_document_update").on("submit", function(event) {
        event.preventDefault();
        $('#mem_policy_document_update button').html('Updating..');
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#mem_policy_document_update").parsley().isValid()) {
            $.ajax({
                url: "/member/policy-document/update",
                method: "POST",
                data: formData,
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    $('#mem_policy_document_update button').html('Update');
                    if (data.status == false) {
                        $("#mem_document_update_message").html('<span class="text-danger">' + data.message + '</span>');
                    } else {
                        $('#myTable').DataTable().ajax.reload();
                        $("#mem_document_update_message").html('<span class="text-success">' + data.message + '</span>');

                    }
                }
            });
        }

    });


    $("#search_city").on("change", function(event) {
        event.preventDefault();

        var state_id = $(this).val();
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if (state_id && state_id != '') {
            $.ajax({
                url: "/member/document/claim/search-city",
                method: "POST",
                data: { state_id: state_id },
                beforeSend: function() {
                    // $("#callback").hide();
                },
                success: function(data) {
                    // console.log(data);
                    if (data.status == false) {
                        swal({
                            //  title: "Good job!",
                            text: data.status,
                            icon: "info",
                        });

                    } else {
                        if (data.data != '') {
                            $('#city').html(data.data);
                        } else {
                            swal({
                                //  title: "Good job!",
                                text: 'City not found.',
                                icon: "info",
                            });
                        }
                    }
                }
            });
        }

    });


    $("#claim_form_submit").parsley();
    $("#claim_form_submit").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#claim_form_submit").parsley().isValid()) {
            $.ajax({
                url: "/member/document/claim/store",
                method: "POST",
                data: formData,
                processData: false,
                contentType: false,
                beforeSend: function() {
                    // $("#callback").hide();
                },
                success: function(data) {
                    // console.log(data);
                    if (data.status == false) {
                        swal({
                            text: data.message,
                            icon: "error",
                        });

                    } else {

                        swal({
                            title: '',
                            text: data.message,
                            icon: 'success',
                            confirmButtonColor: '#3f51b5',
                            confirmButtonText: 'Great ',
                            allowOutsideClick: false,
                            buttons: {
                                confirm: {
                                    text: "OK",
                                    value: true,
                                    visible: true,
                                    className: "btn btn-info",
                                    closeModal: true
                                }
                            }
                        }).then((result) => {
                            if (result) {
                                window.location.href = '/member/claim/search';
                            }
                        });

                    }

                }
            });
        }

    });



    //  //member login claim file document upload



    $("#mem_claim_file_document_upload").parsley();
    $("#mem_claim_file_document_upload").on("submit", function(event) {
        event.preventDefault();
        $('#mem_claim_file_document_upload button').html('Uploading..');
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#mem_claim_file_document_upload").parsley().isValid()) {
            $.ajax({
                url: "/member/document/claimdocument/store",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    $('#mem_claim_file_document_upload button').html('Upload');
                    if (data.status == false) {
                        $("#mem_claim_document_upload_message").html('<span class="text-danger">' + data.message + '</span>');
                    } else {
                        $('#myTable').DataTable().ajax.reload();
                        $("#mem_claim_document_upload_message").html('<span class="text-success">' + data.message + '</span>');
                    }


                }
            });
        }

    });

    $(document).on("click", "#claim_document_table_find .lasttd .deleterow", function(event) {
        event.preventDefault();
        swal({
            title: 'Are you sure ',
            text: "want to delete ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3f51b5',
            cancelButtonColor: '#ff4081',
            confirmButtonText: 'Great ',
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "btn btn-danger",
                    closeModal: true,
                },
                confirm: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "btn btn-primary",
                    closeModal: true
                }
            }
        }).then((willDelete) => {
            if (willDelete) {
                var doc_id = $(this).attr('data-id');
                $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
                if (doc_id && doc_id != '') {
                    $.ajax({
                        url: "/member/document/claim/delete",
                        method: "POST",
                        data: { doc_id: doc_id },
                        beforeSend: function() {
                            // $("#callback").hide();
                        },
                        success: function(data) {
                            if (data.status == true) {
                                swal({
                                    title: '',
                                    text: data.message,
                                    icon: 'success',
                                    confirmButtonColor: '#3f51b5',
                                    confirmButtonText: 'Great ',
                                    allowOutsideClick: false,
                                    buttons: {
                                        confirm: {
                                            text: "OK",
                                            value: true,
                                            visible: true,
                                            className: "btn btn-danger",
                                            closeModal: true
                                        }
                                    }
                                }).then((result) => {
                                    if (result) {
                                        $('#myTable').DataTable().ajax.reload();
                                    }
                                });

                            } else {
                                $('#mem_document_delete_message').html("<strong>Something went wrong!</strong>");

                            }

                        }
                    });
                }

            } else {

                //swal("Your imaginary file is safe!");
            }
        });
    });

    $(document).on("click", "#claim_document_table_find .lasttd .uplateDocumentButton", function() {
        let modelid = $(this).attr('data-id');
        console.log(modelid);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        $.ajax({
            url: "/member/document/claim/single",
            method: "POST",
            data: { id: modelid },
            dataType: "json",
            // processData: false,
            // contentType: false,
            beforeSend: function() {},
            success: function(data) {
                console.log(data);
                if (data.status == true) {
                    $("#uplateClaimDocument .claim_name").val(data.result.claim_name);
                    $("#uplateClaimDocument .id").val(data.result.id);
                    $("#uplateClaimDocument .file_name").val(data.result.file);
                    $('#uplateClaimDocument .claim_type_id').val(data.result.claim_type_id).trigger('change');
                    $('#uplateClaimDocument #downloadPolicy').attr('href', data.asset + '/' + data.result.file);
                    $("#mem_document_update_message").html('');
                    $("#uplateClaimDocument").addClass('is-visible');
                } else {
                    swal({
                        title: data.message,
                        text: "Something went wrong",
                        icon: "error",
                    });
                }
            }
        });
    });

    $("#mem_claim_file_document_update").parsley();
    $("#mem_claim_file_document_update").on("submit", function(event) {
        event.preventDefault();
        $('#mem_claim_file_document_update button').html('Updating..');
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#mem_claim_file_document_update").parsley().isValid()) {
            $.ajax({
                url: "/member/document/claim/update",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    $('#mem_claim_file_document_update button').html('Update');
                    if (data.status == false) {
                        $("#mem_claim_document_update_message").html('<span class="text-success">' + data.message + '</span>');
                    } else {
                        $('#myTable').DataTable().ajax.reload();
                        $("#mem_claim_document_update_message").html('<span class="text-success">' + data.message + '</span>');
                    }
                }
            });
        }

    });





    $("#profile_upload").parsley();
    $("#profile_upload").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#profile_upload").parsley().isValid()) {
            $.ajax({
                url: "/member/profile/store",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    if (data.status == false) {
                        swal({
                            title: "",
                            text: data.message,
                            icon: "error",
                        });
                    } else {
                        swal({
                            title: '',
                            text: data.message,
                            icon: 'success',
                            confirmButtonColor: '#3f51b5',
                            confirmButtonText: 'Great ',
                            allowOutsideClick: false,
                            buttons: {
                                confirm: {
                                    text: "OK",
                                    value: true,
                                    visible: true,
                                    className: "btn btn-info",
                                    closeModal: true
                                }
                            }
                        }).then((result) => {
                            if (result) {
                                window.location.href = '/member/profile';
                            }
                        });

                    }

                }
            });
        }

    });


    $("#grievance_form_submit").parsley();
    $("#grievance_form_submit").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#grievance_form_submit").parsley().isValid()) {
            console.log('loaded');
            $.ajax({
                url: "/member/grievance/registration/store",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {},
                success: function(data) {
                    if (data.status == false) {
                        swal({
                            title: "",
                            text: data.message,
                            icon: "error",
                        });
                    } else {
                        swal({
                            title: '',
                            text: data.message,
                            icon: 'success',
                            confirmButtonColor: '#3f51b5',
                            confirmButtonText: 'Great ',
                            allowOutsideClick: false,
                            buttons: {
                                confirm: {
                                    text: "OK",
                                    value: true,
                                    visible: true,
                                    className: "btn btn-info",
                                    closeModal: true
                                }
                            }
                        }).then((result) => {
                            if (result) {
                                window.location.href = '/member/grievance';
                            }
                        });

                    }
                }
            });
        }

    });


    $("#grievance_form_update").parsley();
    $("#grievance_form_update").on("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
        if ($("#grievance_form_update").parsley().isValid()) {
            $.ajax({
                url: "/member/grievance/update",
                method: "POST",
                data: formData,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {
                    // $("#callback").hide();
                },
                success: function(data) {
                    // console.log(data);
                    if (data.status == false) {
                        swal({
                            title: "",
                            text: data.message,
                            icon: "error",
                        });
                    } else {
                        swal({
                            title: '',
                            text: data.message,
                            icon: 'success',
                            confirmButtonColor: '#3f51b5',
                            confirmButtonText: 'Great ',
                            allowOutsideClick: false,
                            buttons: {
                                confirm: {
                                    text: "OK",
                                    value: true,
                                    visible: true,
                                    className: "btn btn-info",
                                    closeModal: true
                                }
                            }
                        }).then((result) => {
                            if (result) {
                                window.location.href = '/member/grievance';
                            }
                        });

                    }
                }
            });
        }

    });


    $(".grievance_table .lasttd a:nth-child(3)").on("click", function(event) {
        event.preventDefault();
        swal({
            title: 'Are you sure ',
            text: "want to delete ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3f51b5',
            cancelButtonColor: '#ff4081',
            confirmButtonText: 'Great ',
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "btn btn-danger",
                    closeModal: true,
                },
                confirm: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "btn btn-primary",
                    closeModal: true
                }
            }
        }).then((willDelete) => {
            if (willDelete) {
                var doc_id = $(this).attr('data-id');
                $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
                if (doc_id && doc_id != '') {
                    $.ajax({
                        url: "/member/grievance/delete",
                        method: "POST",
                        data: { doc_id: doc_id },
                        beforeSend: function() {
                            // $("#callback").hide();
                        },
                        success: function(data) {
                            // console.log(data);
                            if (data.status == true) {
                                swal({
                                    title: '',
                                    text: data.message,
                                    icon: 'success',
                                    confirmButtonColor: '#3f51b5',
                                    confirmButtonText: 'Great ',
                                    allowOutsideClick: false,
                                    buttons: {
                                        confirm: {
                                            text: "OK",
                                            value: true,
                                            visible: true,
                                            className: "btn btn-danger",
                                            closeModal: true
                                        }
                                    }
                                }).then((result) => {
                                    if (result) {
                                        window.location.href = '/member/grievance';
                                    }
                                });

                            } else {
                                swal({
                                    title: "",
                                    text: data.message,
                                    icon: "error",
                                });

                            }

                        }
                    });
                }

            } else {

                //swal("Your imaginary file is safe!");
            }
        });
    });

});