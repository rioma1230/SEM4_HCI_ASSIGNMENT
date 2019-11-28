var global = {};

$.getJSON('/json/cuisines.json', function (cuisines) {
	$.getJSON('/json/restaurants.json', function (restaurants) {
		$('#search-btn').click(function () {
			$('#table-body').empty()
			for (let i = 0; i < restaurants.length; i++) {
				if (restaurants[i].name.includes($('#search').val())) {
					$('#table-body').append(`
						<tr style="cursor: pointer" onclick="window.location.assign('/restaurant/show.html')">
							<th>${restaurants[i].name}</th>
							<td>${cuisines.find(function (cuisine) {return cuisine.id === restaurants[i].cuisine }).name}</td>
							<td>${restaurants[i].like}</td>
							<td>${restaurants[i].favourite}</td>
						</tr>
					`);
				}
			}
		});
	})
})