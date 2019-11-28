import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.mjs';

$('#form').submit(function (e) {
	e.preventDefault()

	$.getJSON('/json/users.json', function (users) {
		let username = $('#username').val();
		let password = $('#password').val();
		let user = {};

		for (let i = 0; i < users.length; i++) {
			if (users[i].username === username && users[i].password === password) {
				user = users[i];
				break;
			}
		}

		if (Object.keys(user).length) {
			$('#modal-text').text('You have successfully signed in.')

			Cookies.set('role', user.role);
			Cookies.set('name', user.name);
			Cookies.set('username', user.username);
			Cookies.set('password', user.password);
		} else {
			$('#modal-text').text('Wrong username or password. Please try again.')
		}

		$('#modal').modal('toggle');
	})
})
