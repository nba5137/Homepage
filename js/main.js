/** 
 * ===================================================================
 * Song. Main js
 * 12/10/2017
 * 
 * ===================================================================
 * 1. Scroll to top of the page.
 * 2. Change showing case.
 * ------------------------------------------------------------------- 
 */ 

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
function Func_me() {
	$("#c0").fadeOut(750);
    $("#c2").fadeOut(750);
    $("#c3").fadeOut(750);
    $("#c1").fadeIn(750);
    document.getElementById("myTitle").innerHTML = "about me";
}

function Func_pur() {
	$("#c0").fadeOut(750);
    $("#c1").fadeOut(750);
    $("#c3").fadeOut(750);
    $("#c2").fadeIn(750);
    document.getElementById("myTitle").innerHTML = "my purpose";
}

function Func_con() {
	$("#c0").fadeOut(750);
    $("#c1").fadeOut(750);
    $("#c2").fadeOut(750);
    $("#c3").fadeIn(750);
    document.getElementById("myTitle").innerHTML = "contact me";
}


