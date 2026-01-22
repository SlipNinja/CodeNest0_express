const signin_email = document.querySelector("#signin > .email");
const signin_password = document.querySelector("#signin > .password");
const signin_button = document.querySelector("#signin > button");

const signup_username = document.querySelector("#signup > .username");
const signup_email = document.querySelector("#signup > .email");
const signup_password = document.querySelector("#signup > .password");
const signup_button = document.querySelector("#signup > button");

signin_button.addEventListener("click", (e) => {
	const result = JSON.parse(login(signin_email.value, signin_password.value));
	if (result.length > 0) {
		console.log("USER FOUND");
		console.log(result[0]);
	} else {
		console.log("USER NOT FOUND");
	}
});

signup_button.addEventListener("click", (e) => {
	const result = JSON.parse(create_user(signup_username.value, signup_email.value, signup_password.value));

	if (result.hasOwnProperty("error")) {
		console.error(result["error"]["sqlMessage"]);
	} else {
		console.log(`User created with id ${result["insertId"]}`);
	}
});

function get_users() {
	const users_url = "http://localhost:3000/users";
	return httpRequest("GET", users_url);
}

function login(email, password) {
	const login_url = `http://localhost:3000/login?email=${email}&password=${password}`;
	return httpRequest("GET", login_url);
}

function create_user(username, email, password) {
	const login_url = `http://localhost:3000/create?username=${username}&email=${email}&password=${password}`;
	return httpRequest("POST", login_url);
}

function httpRequest(method, url, body = null) {
	console.log(url);
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open(method, url, false);
	xmlHttp.send(body);
	return xmlHttp.responseText;
}
