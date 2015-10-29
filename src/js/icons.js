/*global*/

"use strict";

module.exports = function() {
	var _width = 200;
	var _height = 200;
	var _data = null;

	function chart(dom) {
   		
		var svg = createSVGElement("svg");
		svg.setAttribute("width", _width);
		svg.setAttribute("height", _height);
		if (_data != null && _data.txt != null) {
			var image = createText();
			svg.appendChild(image);
		}
		var svgChart = createFooter(svg);
		svg.appendChild(svgChart);
		dom.appendChild(svg);
	}

	chart.width = function(value) {
		if (!arguments.length) {
			return _width;
		}
		_width = value;
		return chart;
	};

	chart.height = function(value) {
		if (!arguments.length) {
			return _height;
		}
		_height = value;
		return chart;
	};

	chart.data = function(value) {
		if (!arguments.length) {
			return _data;
		}
		_data = value;
		return chart;
	};

	return chart;
	
	// Convienient functions are below for creating the whole chart.
	function createSVGElement(element) {
		return document.createElementNS("http://www.w3.org/2000/svg", element);
	}

	function createText() {
		 
		 var datatxt = createSVGElement("text");
		 datatxt.setAttribute("x", 86);
		 datatxt.setAttribute("y", 76); 
		 if (_data.txt.indexOf("%") > -1) {
		 	var grade;
		 	var percent_className;
			 if (_data.txt.substr(0,2) < 60) {
				grade = "F";
			} else if (_data.txt.substr(0,2) < 70) {
				grade = "D";
			} else if (_data.txt.substr(0,2) < 80) {
				grade = "C";
			} else if (_data.txt.substr(0,2) < 90) {
				grade = "B";
			} else {
				grade = "A";
			}
			percent_className = "o-percentcolor__" + grade.toLowerCase() + "grade";
		 } else {
		 	 percent_className = "o-number";
		 }
		 datatxt.setAttribute("class", percent_className);
		 datatxt.appendChild(document.createTextNode(_data.txt));
		 return datatxt;
	}

	function createFooter(svg) {
		var text = createSVGElement("text");
		text.setAttribute("class", "o-icon-text");
		text.setAttribute("x", 100);
		if (_data != null && _data.img != null) {
			text.setAttribute("y", 50);
		} else {
			text.setAttribute("y", 150);
		}
		text.appendChild(document.createTextNode(_data.footer));
		return text;
	}

};
