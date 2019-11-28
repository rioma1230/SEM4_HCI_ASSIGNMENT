$('#form').submit(function (e) {
	e.preventDefault()

	window.location.assign('./edits.html');
})

$.getJSON('/json/cities.json', function(cities){
	$.each(cities, function(index, element) {
		$('#city').append('<option>' + element.name + '</option>')
	})
})

$.getJSON('/json/areas.json', function(cities){
	$.each(cities, function(index, element) {
		$('#area').append('<option>' + element.name + '</option>')
	})
})
