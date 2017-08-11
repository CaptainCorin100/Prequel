var expense = document.getElementById("stats_form_expense");
function push () {
	var div = document.createElement ("div");
	div.innerHTML ='<label>Expense Category:</label>\n' +
					'<select>\n' +
						'<option value="food">Food</option>\n' +
						'<option value="appliances">Appliances</option>\n' +
						'<option value="luxuries">Luxuries</option>\n' +
						'<option value="other">Other</option>\n' +
					'</select>\n' +
					'<label>Expense Name:</label>\n' +
					'<input type="text" name="name" id="stats_form_netpay">\n' +
					'<label>Cost(£):</label>\n'+
					'<input type="number" name="cost" id="stats_form_netpay">';
	div.id = "stats_form_expense_row" + ((document.getElementById("stats_form_expense").children.length-1).toString());
	div.children[1].id = "stats_form_expense_type" + ((document.getElementById("stats_form_expense").children.length-1).toString());
	div.children[3].id = "stats_form_expense_name" + ((document.getElementById("stats_form_expense").children.length-1).toString());
	div.children[5].id = "stats_form_expense_cost" + ((document.getElementById("stats_form_expense").children.length-1).toString());

	div.name = "stats_form_expense_row" + ((document.getElementById("stats_form_expense").children.length-1).toString());
	div.children[1].name = "type";	
	div.children[3].name = "name";	
	div.children[5].name = "cost";
	document.getElementById("stats_form_expense").appendChild (div);
	document.getElementById("stats_panel").style.paddingBottom += "1%";
}
function remove () {
	if (document.getElementById("stats_form_expense").children.length > 1) {
		document.getElementById("stats_form_expense").removeChild (document.getElementById("stats_form_expense").children[document.getElementById("stats_form_expense").children.length - 1]);
	}
}
