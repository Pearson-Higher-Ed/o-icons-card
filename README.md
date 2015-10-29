# o-icons-card [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/o-icons-card.svg)](https://travis-ci.org/Pearson-Higher-Ed/o-icons-card)

## Use

To use, create a new instance of the card with a JSON configuration payload.

The JSON paramaters are as follows:

	data (required): data to be displayed in the icon format {footer: "textvalue", txt: "value"}
    title (required): title of the graph
    size: (requires):card size ,currently it supports only medium,

This card works by building the card in a DOM node and then returning that node when .getDomNode() is called.

### Example HTML
	<div class="card-medium-wide" id="chart"></div>
	<script>
	
			var Icons = require("../../main");

###if you want the text instead icon 
		    new Icons("#chart", {
		        size: "medium",
		        data:{footer: "Complete", txt: "86%"},//{footer:"",txt:"../src/calender.png"}
		        title: "Course Progress Week 6 of 12 "}
		    );

###if you want icons such as calendar ,timer 
		    new Icons("#chart", {
       			 size: "medium",
        		data:{footer: "2.5%", img: "fa fa-arrow-up"},//{footer:"",img:"../src/calender.png"}
        		title: "Grade to Date Trend"}
  			);

	</script>
