$("#myTab a").on("click", function (e) {
  e.preventDefault();
  $(this).tab("show");
});
$(document).ready(function() {
 
  var owl = $("#owl-carousel");
 
  owl.owlCarousel({
    nav : false,
    items : 4,
    transitionStyle : "fade",
    dots:false,
  });
  $("#botao-anterior").on('click', function(){
owl.trigger('prev.owl.carousel');


  });

  $("#botao-proximo").on('click', function(){
    owl.trigger('next.owl.carousel');
    
    
      });
 
});