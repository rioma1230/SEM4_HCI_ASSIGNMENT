import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.mjs';

function roleAbbreviationToFull(abbreviation) {
	switch (abbreviation) {
		case 'a': return 'Admin';
		case 'o': return 'Operator';
		case 'n': return 'Normal user';
	}
}

$('#name').text(Cookies.get('name'))
$('#username').text('#' + Cookies.get('username'))
$('#role').text(roleAbbreviationToFull(Cookies.get('role')))
