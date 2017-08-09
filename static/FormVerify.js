window.onLoad = function () {
	var form = document.getElementById ("home_body_left");
	console.log (form);
	var name = form.children[2];
	//var mail = form.children[5];
	var pass = form.children[8];
	var pass2 = form.children[11];

	name.onchange = validateName ();
	//mail.onchange = validateMail ();
	pass.onchange = validatePassword ();
	pass2.onchange = validatePassword ();
}

function validateName () {
	if (name.value.length < 6) {
		name.setCustomValidity ("Name is too short");
	} else {
		name.setCustomValidity ("");
	}
} 
function validatePassword () {
	if (pass.value != pass2.value) {
		pass2.setCustomValidity ("Passwords do not match");
	} else {
		var re = /^.{6,}$/;
		if(!re.test(pass)) {
			pass.setCustomValidity ("Password is unapplicable");
		}
	}
}