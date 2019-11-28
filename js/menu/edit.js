$('#form').submit(function (e) {
	e.preventDefault()

	$('#table-body').append(`
		<tr>
			<td>${$('#name').val()}</td>
			<td>$ ${parseInt($('#price').val()).toFixed(1)}</td>
		</tr>
	`)
})
