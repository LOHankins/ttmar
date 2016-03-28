//  I cannot seem to figure out why this won't execute as expected.  When I change the call function so
//  that works immediately, every thing runs.  But trying to make it work with the click event
//  doesn't seem to work.  And it keeps telling me that event is undefined.  Isn't it a system 
//  object.

var theFirst = document.getElementById("first_paragraph");
console.log(theFirst);
var theSecond = document.getElementById("second_paragraph");
console.log(theSecond);
var theSecondClass = document.querySelector(".second_paragraph");
console.log(theSecondClass);
var theFirstChorus = document.getElementById("first_chorus");
console.log(theSecond);
var theFirstChorusClass = document.querySelector(".first_chorus");
console.log(theFirstChorusClass);
var theThird = document.getElementById("third_paragraph");
console.log(theThird);
var theThirdClass = document.querySelector(".third_paragraph");
console.log(theThirdClass);
var theFourth = document.getElementById("fourth_paragraph");
console.log(theFourth);
var theFourthClass = document.querySelectorAll(".fourth_paragraph");
console.log(theFourthClass);

function clickFirstParagraph() {
	debugger;
	console.log("fp function");
  document.body.style.backgroundColor = "green";
}

function clickSecondParagraph() {
	debugger;
	console.log("sp function");
	theSecondClass.style.display = "inline";
}

function clickTheFirstChorus() {
	debugger;
	console.log("fc function");
	theFirstChorusClass.style.display = "inline";
//	event.preventDefault();
}

function clickThirdParagraph() {
	debugger;
	console.log("tp function");
	theThirdClass.style.display = "inline";
}

function changeDisplay(x , y, z) {
	console.log("change display. ");
	console.log(theFourthClass);
	document.querySelectorAll(".fourth_paragraph").style.display = "inline";
}

function clickFourthParagraph() {
	debugger;
	console.log("4p function");
	theFourthClass.forEach(changeDisplay());
}

theFirst.addEventListener(" click ", clickFirstParagraph());

theSecond.addEventListener(" click ", clickSecondParagraph());

theFirstChorus.addEventListener(" click ", clickTheFirstChorus());

theThird.addEventListener(" click ", clickThirdParagraph());

theFourth.addEventListener(" click ", clickFourthParagraph());


//document.getElementById("first_paragraph").addEventListener("click", function() {
//	document.body.style.backgroundColor = "green";
//
//});
