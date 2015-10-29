/*global*/
"use strict";

var icons = require("./Icons");

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

	var width = 200;
	var height = 200;
	switch(params.size) {
		case "small":
			throw new Error("Size cannot be small");
		case "medium":
			width = 200;
			height = 200;
			break;
		case "large":
			width = 400;
			height = 400;
			break;
		default:
			break;
	}
	var chartDiv = document.createElement("div");
	chartDiv.className = "o-calendar";

	var chartTitle = document.createElement("h1");
	chartTitle.className = "o-calendar-title";
	chartTitle.style.color = "#5C656B";
	chartTitle.innerHTML = params.title;

	chartDiv.appendChild(chartTitle);
	this.card = document.createElement("div");
	this.card.appendChild(chartDiv);
	this.card.className = "o-card o-card--" + params.size;
	this.card.style.backgroundColor = "#EBEBEB";
	var chart = icons().width(200).height(200).data(params.data);
	//image 
	if(params.data != null && params.data.img != null){
		var imageDiv = document.createElement("div");
		imageDiv.className = "o-calendarImage";
		var images = document.createElement("i");
		images.className = params.data.img;
		images.style.fontSize = "3.7em";
		imageDiv.appendChild(images);
		this.card.appendChild(imageDiv);
		chart(imageDiv);
	} else {
		chart(chartDiv);
	}
	element.appendChild(this.card);

}

module.exports = Icons;
