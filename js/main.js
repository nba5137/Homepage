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
    $("#c2").fadeOut(1500);
    $("#c3").fadeOut(1500);
    $("#c1").fadeIn(1500);
    document.getElementById("myTitle").innerHTML = "about me";
}

function Func_pur() {
    $("#c1").fadeOut(1500);
    $("#c3").fadeOut(1500);
    $("#c2").fadeIn(1500);
    document.getElementById("myTitle").innerHTML = "my purpose";
}

function Func_con() {
    $("#c1").fadeOut(1500);
    $("#c2").fadeOut(1500);
    $("#c3").fadeIn(1500);
    document.getElementById("myTitle").innerHTML = "contact me";
}


