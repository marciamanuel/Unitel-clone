$("#myTab a").on("click", function (e) {
  e.preventDefault();
  $(this).tab("show");
});
$(document).ready(function() {
 
  var owl = $("#owl-carousel");
 
  owl.owlCarousel({
    nav : true,
    items : 4,
    transitionStyle : "fade",
    dots:false,
  });
 
});