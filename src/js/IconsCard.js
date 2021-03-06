/*global*/
"use strict";

function Icons(element, params) {
	if (!(this instanceof Icons)) {
		throw new TypeError("Constructor Calendar requires \"new\"");
	}
	if (!element) {
		throw new TypeError("missing required argument: element");
	}
	if (typeof element === "string") {
		element = document.querySelector(element);
	}
	if (!element) {
		return;
	}
	if( !params.data ) {
		throw "No data provided. Please configuration data.";
	}

	var chartDiv = document.createElement("div");
	chartDiv.className = "o-icon";

	var chartTitle = document.createElement("h1");
	chartTitle.className = "o-icon-title";
	chartTitle.style.color = "#5C656B";
	chartTitle.innerHTML = params.title;

	chartDiv.appendChild(chartTitle);

	this.card = document.createElement("div");
	this.card.appendChild(chartDiv);
	this.card.className = "o-card o-card--" + params.size;
	this.card.style.backgroundColor = "#EBEBEB";
	var footer = document.createElement("div");
	footer.innerHTML = params.data.footer;
	footer.className = "o-iconcard-container__cardfooter";
	//image 
	if (params.data != null && params.data.img != null) {
		var imageDiv = document.createElement("div");
		imageDiv.className = "o-icon-img";
		var images = document.createElement("i");
		images.className = params.data.img;
		images.style.fontSize = "2.7em";
		imageDiv.appendChild(images);
		this.card.appendChild(imageDiv);
		
	} else {
		var grade;
		var intclass;
		if ((params.data.txt.substr(2,3)) != null && (params.data.txt.substr(2,3)) === "%") {
			if (params.data.txt.substr(0,2) < 60) {
				grade = "F";
			} else if (params.data.txt.substr(0,2) < 70) {
				grade = "D";
			} else if (params.data.txt.substr(0,2) < 80) {
				grade = "C";
			} else if (params.data.txt.substr(0,2) < 90) {
				grade = "B";
			} else {
				grade = "A";
			}
			intclass = "o-percentcolor__" + grade.toLowerCase() + "grade";
		} else {
			intclass = "o-number";
		}
			var chartDiv = document.createElement("div");
			chartDiv.className = intclass;
			chartDiv.innerHTML = params.data.txt;
			this.card.appendChild(chartDiv);
	}
	this.card.appendChild(footer);
	element.appendChild(this.card);

}

module.exports = Icons;
