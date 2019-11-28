$.getJSON('/json/menus.json', function(menus) {
	for (let i = 0; i < menus.length; i++) {
		if (menus[i].restaurant === 1) {
			var now = Date.now();
			if (!menus[i].special || (menus[i].from <= now && now >= menus[i].to )){
				$('#menu-table-body').append(`
					<tr style="cursor: pointer" onclick="$('#menu-image').attr('src', '${menus[i].image}')" data-toggle="modal" data-target="#menu-image-modal">
						<th>${menus[i].name}</th>
						<td>${menus[i].enable}</td>
						<td>${menus[i].special}</td>
						<td>${menus[i].from}</td>
						<td>${menus[i].to}</td>
						<td>${menus[i].dishes[0].name}</td>
						<td>$${menus[i].dishes[0].price.toFixed(1)}</td>
					</tr>
				`);

				for (let j = 1; j < menus[i].dishes.length; j++) {
					$('#menu-table-body').append(`
						<tr style="cursor: pointer" onclick="$('#menu-image').attr('src', '${menus[i].image}')" data-toggle="modal" data-target="#menu-image-modal">
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>${menus[i].dishes[j].name}</td>
							<td>$${menus[i].dishes[j].price.toFixed(1)}</td>
						</tr>
					`);
				}
			}
		}
	}
})
