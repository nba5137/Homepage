/** 
 * ===================================================================
 * Song. Main js
 * 12/10/2017
 * 
 * ===================================================================
 * 0. Initial case
 * 1. Scroll to top of the page.
 * 2. Change showing case.
 * ------------------------------------------------------------------- 
 */ 

/* 0. Initial case */
function initial() {
	$("#c0").fadeIn(750);
    document.getElementById("myTitle").innerHTML = "welcome";
}

/* 1. Scroll to top of the page */
function Func_top() {
    $('html, body').animate({scrollTop:0}, 1500);
    $("#c1").fadeOut(500);
    $("#c2").fadeOut(500);
    $("#c3").fadeOut(500);
    $("#c0").fadeIn(500);
    document.getElementById("myTitle").innerHTML = "welcome";
}

/* Comment out since change whole style for homepage. 
function Func_me() {
    $('html, body').animate({
        scrollTop: $("#me_div").offset().top
    }, 1500);
}
*/

/* 2. Change showing case */
var start = false;

function Func_me() {
	if (start)
	{
		return;
	}
	start = true;
	$("#c0").fadeOut(500);
    $("#c2").fadeOut(500);
    $("#c3").fadeOut(500);
    $("#c1").fadeIn(500, function(){start = false});
    document.getElementById("myTitle").innerHTML = "about me";
}

function Func_pur() {
	if (start)
	{
		return;
	}
	start = true;
	$("#c0").fadeOut(500);
    $("#c1").fadeOut(500);
    $("#c3").fadeOut(500);
    $("#c2").fadeIn(500, function(){start = false});
    document.getElementById("myTitle").innerHTML = "my purpose";
}

function Func_con() {
	if (start)
	{
		return;
	}
	start = true;
	$("#c0").fadeOut(500);
    $("#c1").fadeOut(500);
    $("#c2").fadeOut(500);
    $("#c3").fadeIn(500, function(){start = false});
    document.getElementById("myTitle").innerHTML = "contact me";
}


