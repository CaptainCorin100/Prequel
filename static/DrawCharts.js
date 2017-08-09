google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart () {
	var arrayShared = [["Group", "spent", {role:"style"},{role:"annotation"}]];
	var users = [["a",6,"#ae2222","a"],["ee",999,"#ed2211","ee"]];
	for (var i = 0; i < users.length; i++) {
		arrayShared.push (users[i]);
	}

	var arrayPersonal = [["Type", "bought", {role:"style"}]];
	var types = [["food", 50, "#32fd11"], ["luxuries", 22, "#659811"]];
	for (var j = 0; j < types.length; j++) {
		arrayPersonal.push(types[j]);
	}

	var data = google.visualization.arrayToDataTable(arrayShared);
	var options={title:"Expenditures",height:"100%",width:"100%",backgroundColor:{fill:"transparent"}};
	var chart = new google.visualization.BarChart (document.getElementById ("compare_right_chart"));
	chart.draw (data, options);

	var data2 = google.visualization.arrayToDataTable(arrayPersonal);
	var options2={title:"Expenditures",height:"100%",width:"100%",backgroundColor:{fill:"transparent"}};
	var chart2 = new google.visualization.PieChart (document.getElementById ("compare_left_chart"));
	chart2.draw (data2, options2);
}