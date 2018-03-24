$(document).ready(function () {

    var regexp_input = $('#regexp_input');
    var str_input = $('#str_input');
    var flags_input = $('#flags_input');
    var regexp_input_error = $('#regexp_input_error');
    var str_input_error = $('#str_input_error');
    var flags_input_error = $('#flags_input_error');
    var regexp_result = $('#regexp_result');
    var str_result = $('#str_result');
    var str_search_result = $('#str_search_result');

    $('#button_find').click(function () {

        regexp_input_error.css('display', 'none');
        str_input_error.css('display', 'none');
        flags_input_error.css('display', 'none');

        // var regexp = regexp_input.val();
        // var str = str_input.val();
        var regexp_str = regexp_input.val().toString();
        var flags = flags_input.val().toString();
        var str = str_input.val().toString();
        var validate = true;

        console.log(regexp_str);
        console.log(str);
        console.log(flags);

        if (str === '') {
            str_input_error.css('display', 'block');
            str_input.focus();
            validate = false;
        }
        if (flags.search(/[^igmy]+/) != -1 || flags.length > 4) {
            console.log('asdfghjk');
            flags_input_error.css('display', 'block');
            flags_input.focus();
            validate = false;
        }
        if (regexp_str === '') {
            regexp_input_error.css('display', 'block');
            regexp_input.focus();
            validate = false;
        }

        if (validate) {

            $('.result').css('display', 'block');

            var regexp = new RegExp(regexp_str, flags);
            var result;
            var result_str = '';

            result = str.match(regexp);
            console.log(result);

            regexp_result.html(regexp);
            str_result.html(str);
            for(i = 0; i < result.length; i++){
                if(i == result.length - 1){
                    result_str += result[i];
                } else{
                    result_str += result[i] + ', ';
                }
                console.log(result_str);
            }
            str_search_result.html(result_str);

            validate = false;
        }

    });

});