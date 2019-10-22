var data = [{
        "name": "FOOD",
        "dishes": {
            "dname": "FOOD",
            "price": 15.5
        },
        "is_enabled": true,
        "is_special": true,
        "from": "2012-04-21T18:25:43-05:00",
        "to": "2020-04-21T18:25:43-05:00"
    },
    {
        "name": "SomethingGoodeat",
        "dishes": {
            "dname": "GOOD",
            "price": 3000
        },
        "is_enable": true,
        "is_special": true,
        "from": "2019-04-21T18:25:43-05:00",
        "to": "2020-04-21T18:25:43-05:00"
    },
    {
        "name": "FOOD1",
        "dishes": {
            "dname": "GOOD",
            "price": 3000
        },
        "is_enable": true,
        "is_special": true,
        "from": "2012-04-21T18:25:43-05:00",
        "to": "2020-04-21T18:25:43-05:00"
    },
    {
        "name": "FOOD2",
        "dishes": {
            "dname": "dsa",
            "price": 12
        },
        "is_enable": true,
        "is_special": true,
        "from": "2012-04-21T18:25:43-05:00",
        "to": "2020-04-21T18:25:43-05:00"
    },
    {
        "name": "FOOD3",
        "dishes": {
            "dname": "GOOD",
            "price": 3000
        },
        "is_enable": true,
        "is_special": true,
        "from": "2012-04-21T18:25:43-05:00",
        "to": "2020-04-21T18:25:43-05:00"
    }
];

output = "";
$.each(data, function(key, val) {

    var tr = document.createElement("tr");

    var tdName = document.createElement("td");
    tdName.innerHTML = val.name;

    var tdDname = document.createElement("td");
    tdDname.innerHTML = val.dishes.dname;

    var tdPrice = document.createElement("td");
    tdPrice.innerHTML = val.dishes.price;

    var like = document.createElement("td");
    like.innerHTML = '<div class="fav-btn"><span href="" class="favme dashicons dashicons-heart"></span></div>';

    tr.append(tdName);
    tr.append(tdDname);
    tr.append(tdPrice);
    $('#jsonTable').append(tr);

});

$('#filter-records').html(output);

if (!RegExp.escape) {
    RegExp.escape = function(s) {
        return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    };
}

jQuery(function() {
    var $rows = $('.values');
    $('#seeker').keyup(function() {
        var regex = new RegExp(RegExp.escape($.trim(this.value).replace(/\s+/g, ' ')), 'i');
        $rows.hide().filter(function() {
            var text = $(this).children(".value-name").text().replace(/\s+/g, ' ');
            return regex.test(text);
        }).show();
    });
});