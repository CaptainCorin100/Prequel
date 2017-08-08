var expense = document.getElementById("stats_form_expense");
function push () {
	if (document.getElementById("stats_form_expense").children.length <= 6) {
		var div = document.createElement ("div"); 
		div.innerHTML = '<div>\n'+'<label>Purchase Type:</label>\n'+'<select>\n'+'<option value="food">Food</option>\n'+'<option value="appliances">Appliances</option>\n'+'<option value="luxuries">Luxuries</option>\n'+'</select>\n'+'<label>Purchase Amount:</label>\n'+'<input type="text" name="Amount:" id="stats_form_netpay">\n'+'</div>';
		document.getElementById("stats_form_expense").appendChild (div);
	}
}
function remove () {
	if (document.getElementById("stats_form_expense").children.length > 1) {
		document.getElementById("stats_form_expense").removeChild (document.getElementById("stats_form_expense").children[document.getElementById("stats_form_expense").children.length - 1]);
	}
}