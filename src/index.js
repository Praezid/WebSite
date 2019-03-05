$(function() {
  $('#imagesCarousel').carousel({
    interval: 5000
  });

});

menu.onclick = function myFunction(){
	var x = document.getElementsByTagName('menu');

	if(x.className === "menu"){
		x.className+=" responsive";
	} else {
		x.className = "menu";
	}
}
