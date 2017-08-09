window.onload = function () {
	var form = document.getElementById ("home_form");
	console.log (form.children[2]);
	form.children[2].oninput = validateName;
	form.children[8].oninput = validatePassword;
	form.children[11].oninput = validatePassword;
}

function validateName () {
	console.log (document.getElementById ("home_form").children[2].value.length);
	if (document.getElementById ("home_form").children[2].value.length < 6) {
		document.getElementById ("home_form").children[2].setCustomValidity ("Name is too short");
	} else {
		document.getElementById ("home_form").children[2].setCustomValidity ("");
	}
} 
function validatePassword () {
	if (document.getElementById ("home_form").children[8].value != document.getElementById ("home_form").children[11].value) {
		document.getElementById ("home_form").children[11].setCustomValidity ("Passwords do not match");
	} else {
		var re = /^.{6,}$/;
		if(!re.test(document.getElementById ("home_form").children[8])) {
			document.getElementById ("home_form").children[8].setCustomValidity ("Password is unapplicable");
		}
	}
}