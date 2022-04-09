var username = document.getElementById("username");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var check = document.getElementById("agree");
var button = document.getElementById("button");

username.onfocus = function () {
	if (username.value == "") {
		username.style.backgroundColor = "#fc9d9d";
	} else {
		username.style.backgroundColor = "#98e79c";
	}
};

username.onkeyup = function () {
	username.style.backgroundColor = "#98e79c";
};

username.onblur = function () {
	if (username.value != "") {
		username.style.backgroundColor = "#98e79c";
	} else {
		username.style.backgroundColor = "#fc9d9d";
	}
};

password.onfocus = function () {
	if (password.value == "") {
		password.style.backgroundColor = "#fc9d9d";
	}
};

password.onkeyup = function () {
	if (password.value.length >= 6) {
		password.style.backgroundColor = "#98e79c";
	} else {
		password.style.backgroundColor = "#fc9d9d";
	}
};

password.onblur = function () {
	if (password.value != "" && password.value.length >= 6) {
		password.style.backgroundColor = "#98e79c";
	} else {
		password.style.backgroundColor = "#fc9d9d";
	}
};

repassword.onfocus = function () {
	if (repassword.value == "") {
		repassword.style.backgroundColor = "#fc9d9d";
	}
};

repassword.onkeyup = function () {
	if (repassword.value.length >= 6 && password.value == repassword.value) {
		repassword.style.backgroundColor = "#98e79c";
	} else {
		repassword.style.backgroundColor = "#fc9d9d";
	}
};

repassword.onblur = function () {
	if (repassword.value != "" && repassword.value.length >= 6) {
		repassword.style.backgroundColor = "#98e79c";
	} else {
		repassword.style.backgroundColor = "#fc9d9d";
	}
};

button.onclick = function () {
	if (
		check.checked &&
		username.value != "" &&
		password.value != "" &&
		password.value.length >= 6 &&
		password.value === repassword.value
	) {
		alert("Berhasil mendaftar");
	} else {
        alert("Gagal mendaftar harap cek semua inputan form");
	}
}
