
/*
var modelS = {

	make: "Tesla",

	model: "Model S",

	cost: 70000,

	preowned: false,

	miles: 0,

	finalCost: function(discount) {

	this.cost = this.cost - (this.cost * (discount/100));

	return this.cost;

	}

};
*/
/*
var discount = prompt ("What is youyr discount")

var backpack = {
	make: "Rucksack"

	type: "Model Rucksack"

	cost: 1000

	madeinchina: true,

	quality: "silk"

	finalCost: function(discount) {

		this.cost = this.cost - (this.cost * (discount/100));

		return this.cost;

		alert("Your final cost is:")

	}

};
*/

window.onload = function() {
	//var greeting;
	//var element = document.getElementById("intro");

	var button = document.querySelector("button");
	button.addEventListener("click", addText);

	//element.insertAdjacentHTML("afterbegin", "h1", + greeting + "</h1>");

	function addText() {
		var boo = document.getElementById("boo");
		var msg = "<img id='boo1' src='patrick.jpeg' height='408'> </img>"
		boo.innerHTML  = msg;
	}
}

function classSchedule(dayofweek, weekType) {
	if (dayofweek == "Monday" && weekType == "A") {
		alert("Go to Design")
	} else if (dayofweek == "Monday" && weekType == "B") {
		alert("Go to Art")
	} else {
		alert("G home!")
	}
}

classSchedule("Monday", "A");


var dayofweek = prompt ("What is today?");


if (dayofweek == "Monday" || dayofweek == "monday"){
	alert("Go to Design");
}

else if (dayofweek == "Tuesday") {
	alert("Go to Lakeshore");
}


else {
	alert("Go home!");
}

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good morning!';
} else {
	greeting = 'Welcome!';
}

document.write( '<h1>' + greeting + '</h1>');
/**

function addTwoNumbers(var x, var y){
	if (x==0) {
		return ("Try again")
	} else {
		return x+y;
	}

	return x+y;
}

var answer= addTwoNumbers(2,4);
console.log(answer);

var anotherAnswer = addTwoNumbers(199,465);
console.log(anotherAnswer)



/*

var giftCard = 100;

while (giftCard >= 0) {
	console.log("You have a balance of: $" + giftCard);
	giftCard = giftCard - 10;
	if (giftCard == 50) {
		console.log ("You have $50 left. You should consider saving!");
	}
	if (giftCard == 0) {
		console.log ("Broke assssss");
	}
}

for (var giftCard = 100; giftCard>=0; giftCard--) {
	console.log(giftCard);
	if (giftCard == 50) {
		console.log("You almost broke")
	}
}

*/

/*
var student = "Kevo";
var age = 15;
var isEnrolled = true;
var testscore = 95;
var testscore2 = 90
var averagescore = (testscore + testscore2)/2;
console.log("student: " + student);
console.log("test average: " + averagescore);


var roster = ["Bowen", "Ariel", "Noah K", "Diego"];

student = roster[0];
console.log("student: " + student);

roster.push("Varun");
console.log(roster);
*/
