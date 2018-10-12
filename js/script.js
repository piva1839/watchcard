$(document).ready(function(){
	$(".main-header__menu").on("click", "a", function(){
		if ($(".main-header__menu a").hasClass("active")) {
			$(".main-header__menu a").removeClass("active");
		}
		$(this).addClass("active");
	});

  $(".main-nav__burger-menu-list").click(function() {
    $(".main-nav__burger-menu-list").css("display","none");
  });

  $(".main-nav__burger-menu-icon").click(function() {
    $(".main-nav__burger-menu-list").css("display","block");
  });

  $(".main-nav__burger-menu-item-link").click(function() {
    $(".main-nav__burger-menu-list").css("display","none");
  });

  $(".main-slider").slick({
    dots: true,
    dotsClass: "my-dots",
    arrows: false,
		prevArrow: '<img src="img/arrowleft.png">',
  	nextArrow: '<img src="img/arrowright.png">'
  });

	$(".main-mobile-slider").slick({
		dots: true,
		dotsClass: "my-mobile-dots",
		arrows: false,
		prevArrow: '<img src="img/arrowleft.png">',
		nextArrow: '<img src="img/arrowright.png">'
	});

	$(".more-menu-items").click(function(event) {
		event.preventDefault();
  });

  $(".more-menu-items").mouseover(function() {
    $(".subitems").css("display","block");
  });

  $(".subitems").mouseover(function() {
    $(".subitems").css("display","block");
  });

  $(".more-menu-items").mouseout(function() {
    $(".subitems").css("display","none");
  });

  $(".subitems").mouseout(function() {
    $(".subitems").css("display","none");
  });

	$(".subitems__item a").click(function() {
		$(".subitems").css("display","none");
	});

	$(".fixed-mail").click(function() {
    $(".modal-contact-block").css("display","block");
  });

  $(".close-modal-block").click(function() {
    $(".modal-contact-block").css("display","none");
  });
});
