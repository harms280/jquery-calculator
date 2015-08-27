$(document).ready(function(){
	var result = 0;
	var arg1="";
	var arg2 ="";
	var equation;
	var op = "";
	
	// var operator;
	$('span').not('.operator').click(function(){
		// console.log($(this).text());
		var num = $(this).text();
		$('div#screen').append(num);
	});

	$('#cancel').click(function(){
		$('div#screen').text('');
		arg1="";
		arg2="";
		equation = "";
		op="";
	});

	$('.operator').not('#cancel').not('#calc').click(function() {
		if(op.length === 0) {
		console.log($(this).text());
		// arg1= parseInt($('div#screen').text());
		var operator = $(this).text();
	// 		// equation += +;
		if ($(this).text() === "x") {
			$('div#screen').append(operator);
			op += operator;
			equation = function(a,b) {
				return a * b;
			};
		} else if ($(this).text() === "-") {
			$('div#screen').append(operator);
			op += operator;
			equation = function (a,b) {
				return a - b;
			};
		} else if ($(this).text() === "+") {
			$('div#screen').append(operator);
			op += operator;
			equation = function (a,b) {
					return a + b;
				};
		} else if ($(this).text() === "\367") {
			// if($(this).text() === "÷") {
			$('div#screen').append(operator);
			op = operator;
			equation = function (a,b) {
				return a / b;
			};
		}
		}
	});

	$('#calc').click(function(){
		var arr = $('div#screen').text().split(op);
		arg1= parseInt(arr[0]);
		arg2= parseInt(arr[1]);
		$('div#screen').text(equation(arg1,arg2));
		op="";
	});
});