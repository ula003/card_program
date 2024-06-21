
// C(CREATE) R(READ) U(UPDATE) D(DELETE)

// GET, POST, PATCH, PUT, DELETE

// READ ALL
// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then(response => response.json())
// 	.then(json => console.log(json));


// READ ONE `/${id}`
// fetch('https://jsonplaceholder.typicode.com/todos/200')
// 	.then(response => response.json())
// 	.then(json => console.log(json));


// CREATE
// fetch('https://jsonplaceholder.typicode.com/todos', {
// 	method: "POST",
// 	body: JSON.stringify({
// 		title: 'lorem ipsum dolor sit amet',
// 		userId: 10,
// 		completed: false
// 	})
// });


// try {
// 	fetch('https://jsonplaceholder.typicode.com/todos/260')
// 		.then(response => response.json())
// 		.then(json => console.log(json))
// } catch (error) {
// 	console.log(error);
// }
