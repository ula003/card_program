class Storage {

	getItem(name) {
		const json = localStorage.getItem(name);

		return JSON.parse(json) || [];
	}

	setItem(name, data) {		
		const arr = this.getItem(name);

		arr.push(data);

		localStorage.setItem(name, JSON.stringify(arr));

		return arr;
	}

	auth (user) {
		const users = this.getItem('users');

		return Boolean(users.find((elem) => elem.email === user.email && elem.password === user.password));
	}
}