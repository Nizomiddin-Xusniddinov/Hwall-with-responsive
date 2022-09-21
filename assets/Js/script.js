
$(function () {
    $('header .navbars .row1 .fa-bars').click(function(){
        
        $('.show_sm').animate({
            "position" : "fixed",
            "top" : "0%"
        } , 1000);
      
    })
});
$(' .show_sm .none').click(function(){
    $(' .show_sm').animate({
        "position" : "absolute",
        "top" : "-200%"
    } , 1000);
})