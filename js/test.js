$(function(){

  $('#map').load('../img/india.svg', function(){
    console.log("Loaded my svg");
    var mapZoom = new TimelineMax()
        .fromTo("#map", 2, {scale: 1}, {scale: 4.5, transformOrigin: "0% 50%", x: "-25%"})
        .to("#vavania-location", 1, {visibility: "visible", opacity: 1});
  });

  // $("#map").on("load", function() {
  //   console.log("this loaded")
  //   var mapZoom = new TimelineMax()
  //   .to("#map", 2, {scale: 4, transformOrigin: "50% 50%"});
  // });
	

//.fromTo("section.panel.intro", .5, {y: "0%"}, {y: "-100%"})

//.fromTo("section.panel.intro", .5, {opacity: 1, scale: 1}, {opacity: 0, scale: 0})
// .fromTo("section.panel.mg-quote", .5, {opacity: 0}, {opacity: 1}, "-.5")

// 	var scrollMagicScene = new ScrollMagic.Scene({
//             triggerElement: "#pinContainer",
//             triggerHook: "onLeave",
//             duration: "470%"
//           })
//           .setPin("#pinContainer")
//           .setTween(mapZoom)
//           .addIndicators() // add indicators (requires plugin)
//           .addTo(controller);
         
}); 