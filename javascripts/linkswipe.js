/*

	13twelve vs. jQuery

	This javascript is the main javascript for the sites actions.

*/

// --------------------------------------------------------------------------------------------------------------

var thirteentwelve = function(){
    function linkswipe() {
      $("li a").each(function(i) {
          // make the iteration object a jquery object
          var a = $(this);
          // grab the text
          var title = a.html();
          // and the width
          var w = a.outerWidth();
          // append a span with the content in, to mask over the link      
          a.append("<span class='mask' style='width: 0; display: none;'>"+title+"</span>");
          // store a reference to the span
          var span = a.find("span");
          // do the hover funcs
          a.hover(function(){
              // stop the flicker!
              span.stop(true,true);
              //
              span.show().animate({
                width: w+'px'
              }, 200);
          }, function() {
              span.animate({
                width: '0px'
              }, 400, function(){ 
                  span.hide();          
              });
          });
      });    	
    }
    $(document).ready(function(){
        linkswipe();
    });
    return {
	   linkswipe:linkswipe
	}
}();






























