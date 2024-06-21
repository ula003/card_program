const signupForm = document.forms.signup;

signupForm.onsubmit = (e) => {
	e.preventDefault();
	
	const storage = new Storage();

	const user = {};

	const fm = new FormData(signupForm);

	fm.forEach((value, key) => {
		user[key] = value;
	});

	storage.setItem('users', user);
}