      $(document).ready(function() {
        $('.carousel').slick({
	  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
	  responsive: [
	    { breakpoint: 1024,
	      settings: {
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2
	      }
	    },
	    { breakpoint: 768,
	    settings: {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	      }
	    }
	  ]
      })
});
