$(document).ready(function() {
	$('.carousel').slick({
		dots: true,
	  infinite: true,
	  speed: 300,
	  touchThreshold: 10,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  centerMode: false,
	  variableWidth:false,
	  adaptiveHeight:true,
		responsive: [
			{
				breakpoint: 1025,
		    settings: {
					slidesToShow: 2
		    }
		  },
		  {
		  	breakpoint: 768,
		    settings: {
					slidesToShow: 1
		    }
		  }
		]
	});

		$('.carousel--full').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  infinite: true,
	  arrows: true,
	  dots: true,
	  adaptiveHeight: true,
	});

	$(document).on('click', '.carousel .slick-slide img', function (e) {
		var $smallCarousel = $(this).closest('.carousel');
  	var carouselId = $smallCarousel.data('carousel');
	  var index = $(this).closest('.slick-slide').data('slick-index');
	  var $fullOverlay = $('.carousel--full-overlay[data-carousel="' + carouselId + '"]');
  	var $fullCarousel = $fullOverlay.find('.carousel--full');
	  $fullOverlay.addClass('is-open');
	  $fullCarousel.slick('setPosition');
	  $fullCarousel.slick('slickGoTo', index, true);
	});
	
	$(document).on('keydown', function(e) {
	  if (e.key === 'Escape' || e.key === 'Esc') {
	    if ($('.carousel--full-overlay').hasClass('is-open')) {
	      $('.carousel--full-overlay').removeClass('is-open');
	    }
	  }
	});

	$(document).on('click', '.carousel--full-overlay', function(e) {
	  if (e.target === this) {
	    $(this).removeClass('is-open');
	  }
	});

	$(document).on('click', '.close-carousel', function() {
	  $('.carousel--full-overlay').removeClass('is-open');
	});
});

