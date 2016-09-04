$(function(){
  $('body').flowtype();
	var controller = new ScrollMagic.Controller();

  

	
		    //.fromTo(".map", 1, {scale: 1}, {scale: 5});
//.fromTo("section.panel.intro", .5, {y: "0%"}, {y: "-100%"})

//.fromTo("section.panel.intro", .5, {opacity: 1, scale: 1}, {opacity: 0, scale: 0})
// .fromTo("section.panel.mg-quote", .5, {opacity: 0}, {opacity: 1}, "-.5")

$('.map').load('../img/india2.svg', function(){
    console.log("loading image")
   loadIndiaMap();      
});

function loadIndiaMap(){
 var mapZoom = new TimelineMax()
      .fromTo("section.panel.mg-quote", .3, {y: "100%"}, {y: "0%"})
      .fromTo("section.panel.map-section", .5, {y: "100%"}, {y: "0%"})
      .fromTo(".map-section-content", .5, {y: "0%"}, {y: "-100%"})
      .fromTo(".map", 2, {scale: 1}, {scale: 4.5, x: "150%", y: "10%", opacity: ".5"})
      .fromTo("#vavania-location", .5, {opacity: 0}, {opacity: 1}, "-=.5");

    var scrollMagicScene = new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "470%"
          })
          .setPin("#pinContainer")
          .setTween(mapZoom)
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
  } 
}); 