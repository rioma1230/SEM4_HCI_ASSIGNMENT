import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.mjs';

var num1 = Math.round(Math.random() * 10), num2 = Math.round(Math.random() * 10);
var result = num1 + num2;

$('#num1').text(num1);
$('#num2').text(num2);

$('#form').submit(function(e) {
	e.preventDefault()

	if ($('#old').val() != Cookies.get('password')) {
		window.alert('Wrong old password.')
	} else if ($('#new').val() != $('#confirm').val()) {
		window.alert('New password and confirm password is not matched.')
	} else if ($('#verification').val() != result) {
		window.alert('Invalid verification.')
	} else {
		window.alert('Password changed.')

		window.location.assign('./profile.html')
	}
})
