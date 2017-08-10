window.onload = function () {
	var form = document.getElementById ("home_form_div");
	form.children[2].oninput = validateName;
	form.children[8].oninput = validatePassword;
	form.children[11].oninput = validatePassword;
}

function validateName () {
	if (document.getElementById ("home_form_div").children[2].value.length < 6) {
		document.getElementById ("home_form_div").children[2].setCustomValidity ("Name is too short.");
	} else {
		document.getElementById ("home_form_div").children[2].setCustomValidity ("");
	}
} 
function validatePassword () {
	console.log (document.getElementById ("home_form_div").children[11].value);
	console.log (document.getElementById ("home_form_div").children[8].value);
	if ((document.getElementById ("home_form_div").children[8].value) != (document.getElementById ("home_form_div").children[11].value)) {
		document.getElementById ("home_form_div").children[8].setCustomValidity ("Passwords do not match.");
	} else {
		if(document.getElementById ("home_form_div").children[8].value.length < 6) {
			document.getElementById ("home_form_div").children[8].setCustomValidity ("Password is inapplicable.");
		} else {
			document.getElementById ("home_form_div").children[8].setCustomValidity ("");
		}
	}
}