$(function(){
  $('body').flowtype();
	var controller = new ScrollMagic.Controller();

	var mapZoom = new TimelineMax()
    .fromTo("section.panel.mg-quote", .3, {y: "100%"}, {y: "0%"})
		.fromTo("section.panel.map-section", .5, {y: "100%"}, {y: "0%"})
    .fromTo(".map-section-content", .5, {y: "0%"}, {y: "-100%"})
		.fromTo(".map img", 1, {scale: 1, x: "0%", y: "0%"}, {scale: 7, x: "260%", y: "20%"}, "1")
    .fromTo(".pkd-birth-info-section", 2, {y: "100%"}, {y: "-100%"}, ".75")
    .fromTo(".map img", .3, {opacity: 1}, {opacity: .2}, "1.6"); 
    

    //.fromTo(".pkd-birth-text-container", .5, {y: "0%"}, {y: "-100%"}, "1.3"); 
//.fromTo("section.panel.intro", .5, {y: "0%"}, {y: "-100%"})

//.fromTo("section.panel.intro", .5, {opacity: 1, scale: 1}, {opacity: 0, scale: 0})
// .fromTo("section.panel.mg-quote", .5, {opacity: 0}, {opacity: 1}, "-.5")

	var scrollMagicScene = new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "690%"
          })
          .setPin("#pinContainer")
          .setTween(mapZoom)
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
         
}); 