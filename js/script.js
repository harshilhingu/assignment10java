$(function() {
    $('#submit_button').prop('disabled', true);

    $.each(countries, function(index, value) {
      $("<option/>").val(value.code).text(value.name).appendTo("#country");
    });


    $('#user_input, #pass_input, #confirm_pass_input').bind('keyup', function() {
        checkvalidate();
    });

    $('#confirm_pass_input').bind('change', function() {
        checkvalidate();
    });

    $('select').on('change', function() {
        checkvalidate();
    });

    $('#confirm').on('change', function() {
        checkvalidate();
    });

     $( "form" ).submit(function (e) {
        e.preventDefault();
        let name = $("input[name='username']",this).val();
        let country = $("#country",this).val(); 
        $("#info").append("Welcome "+name+"! The country code you selected is "+country);     
    });

    function checkvalidate()
    {
        if (validate()) {
            $('#submit_button').prop('disabled', false);
        }
    }

    function validate() {
       if (allFilled() && matchPassword() && selectfunction() && checkfunction()) {
            return true;
       }
       return false;
    }

    function allFilled() {
        var filled = true;
        if ($('#user_input').val() == '' && $('#pass_input').val() == '' && $('#confirm_pass_input').val() == '') {
            filled = false;
        }
        return filled;
    }

    function matchPassword() {
        var matched = false;
        if($('#confirm_pass_input').val() === $('#pass_input').val()) matched = true;
        return matched;
    }

    function selectfunction() {
        var selectval = false;
        if($('#country').val() != '') selectval = true;
        return selectval;
    }

    function checkfunction() {
        var checkval = false;
        if($('#confirm').prop('checked')) checkval = true;
        return checkval;
    }

});