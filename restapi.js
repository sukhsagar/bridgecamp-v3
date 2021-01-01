var getOne = function(){
	fetch('https://reqres.in/api/users/1')
	  .then(response => response.json())
	  .then(data => console.log(data));	
}

var getAll = function(){
	fetch('https://reqres.in/api/users')
	  .then(response => response.json())
	  .then(data => console.log(data));	
}

var create = function(){
	var data = { "name":"Sagar","job":"Digital Marketing Lead"}
	fetch('https://reqres.in/api/users', {
	  method: 'POST', // or 'PUT'
	  headers: {
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(data => {
	  console.log('Success:', data);
	})
	.catch((error) => {
	  console.error('Error:', error);
	});	
}

var update = function(){
	var data = { "name":"Sagar","job":"Digital Marketing Lead"}
	fetch('https://reqres.in/api/users/2', {
	  method: 'PUT', // or 'PUT'
	  headers: {
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(data),
	})
	.then(response => response.json())
	.then(data => {
	  console.log('Success:', data);
	})
	.catch((error) => {
	  console.error('Error:', error);
	});	
}