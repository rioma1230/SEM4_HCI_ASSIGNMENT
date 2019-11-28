var selectedMenu = -1

$.getJSON('/json/branches.json', function(menus) {
	for (let i = 0; i < menus.length; i++){
		$('#table-body').append(`
			<tr id="menu-${i}" style="cursor: pointer" onclick="selectedMenu=${i}" data-toggle="modal" data-target="#modal">
				<td>${menus[i].city}</td>
				<td>${menus[i].area}</td>
				<td>${menus[i].address}</td>
			</tr>
		`)
	}
})
