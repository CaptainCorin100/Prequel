function push () {
	document.getElementByID ("stats_form_expense").innerHTML += <div><label>Purchase Type:</label><select><option value="food">Food</option><option value="appliances">Appliances</option><option value="luxuries">Luxuries</option></select><label >Purchase Amount:</label><input type="text" name="Amount:" id="stats_form_netpay"></div>;
}