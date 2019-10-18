var $Modal = $('modal-body');

$(document).ready(function() {
    $('.inputbutton').click(function() {
        $.getJSON("/data/areas.json", function(result) {
            $.each(result, function(i, data) {
                toAppend += '<option>' + data.name + '</option>';
            });
            $('.selection').append(toAppend);
        });
    });
});