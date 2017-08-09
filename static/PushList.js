var expense = document.getElementById("stats_form_expense");
function push () {
	if (document.getElementById("stats_form_expense").children.length <= 6) {
		var div = document.createElement ("div"); 
		div.innerHTML = '<div id="stats_form_expense_row0">\n' + 
						'<label>Expense Category:</label>\n' +
						'<select>\n' +
							'<option value="food">Food</option>\n' +
							'<option value="appliances">Appliances</option>\n' +
							'<option value="luxuries">Luxuries</option>\n' +
							'<option value="other">Other</option>\n' +
						'</select>\n' +
						'<label>Expense Name:</label>\n' +
						'<input type="text" name="name" id="stats_form_netpay">\n' +
						'<label>Cost:</label>\n'+
						'<input type="text" name="cost" id="stats_form_netpay">\n'+
					'</div>';
		div.id = "stats_form_expense_row" + ((document.getElementById("stats_form_expense").children.length-1).toString());
		document.getElementById("stats_form_expense").appendChild (div);
		console.log (div.id);
	}
}
function remove () {
	if (document.getElementById("stats_form_expense").children.length > 1) {
		document.getElementById("stats_form_expense").removeChild (document.getElementById("stats_form_expense").children[document.getElementById("stats_form_expense").children.length - 1]);
	}
}