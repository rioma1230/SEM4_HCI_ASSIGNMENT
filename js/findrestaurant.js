var data = [{
        "id": 1,
        "name": "Restaurant1"
    },
    {
        "id": 2,
        "name": "Restaurant2"
    },
    {
        "id": 3,
        "name": "Restaurant3"
    },
    {
        "id": 4,
        "name": "Restaurant4"
    }
];

output = "";
$.each(data, function(key, val) {

    var tr = document.createElement("tr");

    var tdName = document.createElement("td");
    tdName.innerHTML = val.id;

    var tdDname = document.createElement("td");
    tdDname.innerHTML = val.name;


    tr.append(tdName);
    tr.append(tdDname);
    $('#jsonTable').append(tr);

});

$('#filter-records').html(output);


/* SEEKER FUNCTION */
if (!RegExp.escape) {
    RegExp.escape = function(s) {
        return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    };
}

jQuery(function() {
    var $rows = $('.val');
    $('#seeker').keyup(function() {
        var regex = new RegExp(RegExp.escape($.trim(this.value).replace(/\s+/g, ' ')), 'i');
        $rows.hide().filter(function() {
            var text = $(this).children(".val-name").text().replace(/\s+/g, ' ');
            return regex.test(text);
        }).show();
    });
});