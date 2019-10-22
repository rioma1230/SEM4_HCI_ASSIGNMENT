let dropdownC = $('#city');

dropdownC.empty();

dropdownC.append('<option selected="true" disable>Choose City</option>');
//dropdown.prop('selectedIndex', 0);

$.getJSON('/data/cities.json', function(data) {
    $.each(data, function(key, entry) {
        dropdownC.append($('<option></option>').attr('value', entry.id).text(entry.name));
    });
});

let dropdownA = $('#area');

dropdownA.empty();

dropdownA.append('<option selected="true" disable>Choose Area</option>');
//dropdown.prop('selectedIndex', 0);

$.getJSON('/data/areas.json', function(data) {
    $.each(data, function(key, entry) {
        dropdownA.append($('<option></option>').attr('value', entry.id).text(entry.name));
    });
});