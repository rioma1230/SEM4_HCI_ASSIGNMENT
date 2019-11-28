var selectedMenu = -1

$.getJSON('/json/menus.json', function(menus) {
	for (let i = 0; i < menus.length; i++){
		$('#table-body').append(`
			<tr id="menu-${i}" style="cursor: pointer" onclick="selectedMenu=${i}" data-toggle="modal" data-target="#modal">
				<td>${menus[i].name}</td>
				<td>${menus[i].enable}</td>
				<td>${menus[i].special}</td>
				<td>${menus[i].from}</td>
				<td>${menus[i].to}</td>
			</tr>
		`)
	}
})
