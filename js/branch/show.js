$.getJSON('/json/branches.json', function(branches) {
	for (let i = 0; i < branches.length; i++) {
		var branch = branches[i];

		$('#table-body').append(`
			<tr>
				<th>${branch.city}</th>
				<td>${branch.area}</td>
				<td>${branch.address}</td>
			</tr>
		`);
	}
})
