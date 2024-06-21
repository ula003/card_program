const signin = document.forms.signin;

signin.onsubmit = (e) => {
	e.preventDefault();
	const storage = new Storage();

	const user = {};

	const fm = new FormData(signin);

	fm.forEach((value, key) => {
		user[key] = value;
	});

	const isSignedUp = storage.auth(user);

	if (isSignedUp) {
		alert('Welcome');
	} else {
		alert('You should be signed up');
	}
}