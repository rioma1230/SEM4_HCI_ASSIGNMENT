$.getJSON('/json/cuisines.json', function (cuisines) {
	for (let i = 0; i < cuisines.length; i++) {
		$('#cuisine').append('<option>' + cuisines[i].name + '</option>');
	}
})

$('#form').submit(function (e) {
	e.preventDefault()

	window.location.assign('/restaurant/show.html')
})
