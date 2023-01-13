async function getApi() {
	
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	
	var data = await response.json();
	if (response) {
		document.getElementById('loading').style.display = 'none';
	}
	show(data);
}


function show(data) {

        let tab =
                `<tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>`;
	
	for (let employee of data) {
		tab += `<tr>
                    <td>${employee.name} </td>
                    <td>${employee.username}</td>
                    <td>${employee.email}</td>
                </tr>`;
	}
	document.getElementById("employees").innerHTML = tab;
}

getApi();