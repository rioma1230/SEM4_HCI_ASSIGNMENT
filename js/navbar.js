import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.mjs';

$('#logout').click(function () {
	Cookies.set('role', undefined)

	window.location.reload()
})

if (Cookies.get('role') != 'undefined') {
	$('#guest-bar').remove();

	switch (Cookies.get('role')) {
		case "a":
			$('#navbar-item-list').prepend(`
				<li class="nav-item">
					<a class="nav-link" href="/user/">User</a>
				</li>
			`);
			break;

		case "o":
			$('#navbar-item-restaurant').remove();

			$('#navbar-item-list').prepend(`
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Restaurant</a>
					<div class="dropdown-menu" aria-labelledby="dropdownId">
						<a class="dropdown-item" href="/restaurant">Search Restaurant</a>
						<a class="dropdown-item" href="/restaurant/new.html">Create Restaurant</a>
					</div>
				</li>
			`);
			break;
	}
} else {
	$('#member-bar').remove()
}
