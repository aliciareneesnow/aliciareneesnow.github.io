var dayname=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November",
"December");
var d=new Date();
var today = dayname[d.getDay()] + ", " + d.getDate() + " " + monthname[d.getMonth()] + " " + d.getFullYear();