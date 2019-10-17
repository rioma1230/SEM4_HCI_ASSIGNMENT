var $table = $('#table');
$.getJSON('/data/users.json', (users) => {
    $(function() {
        $('#table').bootstrapTable({
            data: users
        });
    });
});