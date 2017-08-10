google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

var users = [["National Average",6,"#ae2222","National Average"],["You",999,"#ed2211","You"]];
var types = [["food", 50, "#32fd11"], ["luxuries", 22, "#659811"]];
var count = 0;
var values = [];




function drawChart () {
	var arrayShared = [["Group", "spent", {role:"style"},{role:"annotation"}]];
	for (var i = 0; i < users.length; i++) {
		arrayShared.push (users[i]);
	}

	var arrayPersonal = [["Type", "bought", {role:"style"}]];
	for (var j = 0; j < types.length; j++) {
		arrayPersonal.push(types[j]);
	}

	var data = google.visualization.arrayToDataTable(arrayShared);
	var options={title:"Expenditures",height:"100%",width:"100%",backgroundColor:{fill:"transparent"},animation:{"startup":true,duration:1000,"easing":"out"}};
	var chart = new google.visualization.BarChart (document.getElementById ("compare_right_chart"));
	chart.draw (data, options);

	var data2 = google.visualization.arrayToDataTable(arrayPersonal);
	var options2={title:"Expenditures",height:"100%",width:"100%",backgroundColor:{fill:"transparent"}};
	var chart2 = new google.visualization.PieChart (document.getElementById ("compare_left_chart"));
	chart2.draw (data2, options2);
}