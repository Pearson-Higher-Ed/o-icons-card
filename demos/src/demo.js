/*global require*/
"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var Icons = require("../../main");

    new Icons("#chart", {
        size: "medium",
        data:{footer: "Complete", txt: "86%"},//{footer:"",txt:"../src/calender.png"}
        title: "Course Progress Week 6 of 12 "}
    );
});

document.addEventListener("DOMContentLoaded", function() {
    var Icons = require("../../main");

    new Icons("#chart", {
        size: "medium",
        data:{footer: "2.5%", img: "fa fa-arrow-up"},//{footer:"",img:"../src/calender.png"}
        title: "Grade to Date Trend"}
    );
});