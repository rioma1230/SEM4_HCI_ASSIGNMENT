function roleAbbreviationToFull(abbreviation) {
	switch (abbreviation) {
		case 'a':
			return 'Admin';
		case 'o':
			return 'Operator';
		case 'n':
			return 'Normal user';
	}
}

var selectedUser = -1;

$.getJSON('/json/users.json', function (users) {
	$.each(users, function (index, element) {
		$('#table-body').append(`
			<tr id="user-${index}" onclick="selectedUser = ${index}" style="cursor: pointer" data-toggle="modal" data-target="#modal">
				<td>${element.username}</td>
				<td>${element.name}</td>
				<td>${roleAbbreviationToFull(element.role)}</td>
			</tr>
		`)
	})

	$('#search-btn').click(function () {
		$('#table-body').empty()

		$.each(users, function (index, element) {
			var text = $('#search').val();

			if (element.name.includes(text) || element.username.includes(text) || element.role.includes(text)) {
				$('#table-body').append(`
					<tr id="user-${index}" onclick="selectedUser = ${index}" style="cursor: pointer" data-toggle="modal" data-target="#modal">
						<td>${element.username}</td>
						<td>${element.name}</td>
						<td>${roleAbbreviationToFull(element.role)}</td>
					</tr>
				`)
			}
		})
	})
})
