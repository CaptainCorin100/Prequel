google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

var users = [["Friend",0,"#43d1b2","Friend"],["You",0,"#a55221","You"]];
var types = [];

window.onload = function () {
	for (var p = 0; p < document.getElementsByClassName("compare_type_inputs").length; p++) {
		var temp = [];
		temp.push(document.getElementsByClassName("compare_type_inputs")[p].children[1].value);
		temp.push(parseInt(document.getElementsByClassName("compare_type_inputs")[p].children[5].value));
		temp.push("#333333");
		types.push (temp);
	}
}
var count = 0;
var values = [];




function drawChart () {
	var arrayShared = [["Group", "spent", {role:"style"},{role:"annotation"}]];
	for (var i = 0; i < users.length; i++) {
		var line = users[i];
		if (i == 0) {
			var total = 0;
			for (var erf = 0; erf < document.getElementsByClassName ("personal_stats").length; erf++) {
				total += parseInt(document.getElementsByClassName ("personal_stats")[erf].value);
			}
			line [1] = total;
			arrayShared.push (users[i]);
		}
		if (i == 1) {
			var total = 0;
			for (var erf = 0; erf < document.getElementsByClassName ("friend_stats").length; erf++) {
				total += parseInt(document.getElementsByClassName ("friend_stats")[erf].value);
			}
			line [1] = total;
			arrayShared.push (users[i]);
		}
	}
	console.log (arrayShared);
	var arrayPersonal = [["Type", "bought", {role:"style"}]];
	for (var j = 0; j < types.length; j++) {
		var changedOther = false;
		for (var e = 1; e < arrayPersonal.length; e++) {
			if (types[j][0] == arrayPersonal[e][0]) {
				changedOther = true;
				arrayPersonal[e][1] += types[j][1];
			}
		}
		if (!changedOther) {
 			arrayPersonal.push(types[j]);
 		}
	}

	var data = google.visualization.arrayToDataTable(arrayShared);
	var options={title:"Expenditures",height:"100%",width:"100%",backgroundColor:{fill:"transparent"},animation:{"startup":true,duration:1000,"easing":"out"}};
	var chart = new google.visualization.BarChart (document.getElementById ("compare_right_chart"));
	chart.draw (data, options);

	var highest = ["foo",0,"#444444"];
	for (var re = 1; re < arrayPersonal.length; re++) {
		if (arrayPersonal[re][1] > highest[1]) {
			highest = arrayPersonal[re];
		}
	}
	if (highest[0] == "food") {
		document.getElementById ("compare_personal_advice").value = "Good Spending! Keep it up!";
	} else if (highest[0] == "luxuries") {
		document.getElementById ("compare_personal_advice").value = "Oh dear";
	}

	var data2 = google.visualization.arrayToDataTable(arrayPersonal);
	var options2={title:"Expenditures",height:"100%",width:"100%",backgroundColor:{fill:"transparent"},slices:{0:{color:"#21cd21"},1:{color:"#999999"},2:{color:"#eddfed"}}};
	var chart2 = new google.visualization.PieChart (document.getElementById ("compare_left_chart"));
	chart2.draw (data2, options2);
}