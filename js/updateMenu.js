var $table = $('#table');
$.getJSON('/data/menu.json', (data) => {
    $(function() {
        $('#table').bootstrapTable({
            data: data
        });
    });
});