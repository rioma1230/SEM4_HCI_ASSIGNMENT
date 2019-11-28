import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.mjs';

if (Cookies.get('role')){
	if (Cookies.get('role') === 'o' || Cookies.get('role') === 'a') {
		$('#operator-function-bar').append(`
			<div class="row mt-3">
				<div class="col">
					<a href="/menu/edits.html">
						<button type="button" class="btn btn-outline-primary p-3 px-5 btn-lg mr-3">Edit Menus</button>
					</a>
					<a href="/branch/edits.html">
						<button type="button" class="btn btn-outline-danger p-3 px-5 btn-lg mr-3">Edit Branches</button>
					</a>
				</div>
			</div>
		`);
	} else if (Cookies.get('role') !== 'n') {
		$('#should-login').remove();
	}
} 