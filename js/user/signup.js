$('#form').submit(function (e) {
	e.preventDefault()

	if ($('#password').val() === $('#confirm').val()) {
		$('#modal-content').text('You have successfully created an account.')
	} else {
		$('#modal-content').text('The password and confirm password doesn\'t match.')
	}

	$('#modal').modal('toggle')
})
