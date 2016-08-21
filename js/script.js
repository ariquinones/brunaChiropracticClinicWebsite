$(".allServicesList").on('click', "li", function() {
	var serviceChosen = $(this).attr('class');
	$('#' + serviceChosen).addClass('show').siblings().removeClass('show');
	$(this).addClass('activeColor').siblings().removeClass('activeColor');
})

$("#toggleLanguageBtn").on('change', function() {
	if ($('.englishServicesList').hasClass("noShow")) {
		$('.englishServicesList').removeClass('noShow');
		$('.spanishServicesList').addClass('noShow');
	}
	else {
		$('.englishServicesList').addClass('noShow');
		$('.spanishServicesList').removeClass('noShow');
	}	
})

$('#toggleBioLanguage').on('change', function() {
	if ($('.englishBio').hasClass("noShow")) {
		$('.englishBio').removeClass('noShow');
		$('.spanishBio').addClass('noShow');
	}
	else {
		$('.englishBio').addClass('noShow');
		$('.spanishBio').removeClass('noShow');
	}	
})

$('.clinicImageContainer').on('click', function() {
	var imageChosen = $(this)
	imageChosen.addClass('enlargeImage').siblings().removeClass('enlargeImage');
	$('.layover').removeClass('noShow');
	$('.exitImage').removeClass('noShow');
	$('.exitImage').on('click', function() {
		imageChosen.removeClass('enlargeImage');
		$('.layover').addClass('noShow');
		$('.exitImage').addClass('noShow');
	})
})

$('.mobileMenuHolder').on('click', function() {
	if ($('.mobileMenu').hasClass('noShow')) {
		$('.mobileMenu').removeClass('noShow')
		$('.dropDownMenuAbout').on('click', function() {
			$('.secondaryMenuAbout').css('display', 'block')
		})
		$('.dropDownMenuService').on('click', function() {
			$('.secondaryMenuService').css('display', 'block')
		})
	}
	else {
		$('.mobileMenu').addClass('noShow')	
	}	
})

var mq = window.matchMedia("(min-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq)
    function WidthChange(mq) {
    	if (!mq.matches) {
    		console.log('mobile')
    	}
    	else {
    		console.log('desktop')
    		$('.mobileMenu').addClass('noShow')

    	}
    } 

