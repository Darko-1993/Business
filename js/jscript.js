/* nav bar */

$( document ).ready(function() {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
            $('#top-message').hide();
        } else {
            $('.navbar').removeClass('active');
            $('#top-message').show();
        }
    });
});

/*** SHADOW ***/

$( document ).ready(function() {
    $(".latest-box-1").mouseover(function()
	{ 
	   	$(".latest-box-1").addClass("box-shadow");
		$(".latest-box-2").removeClass("box-shadow");
		$(".latest-box-3").removeClass("box-shadow");
		
		$(".latest-box-1").mouseleave(function(){
			$(".latest-box-2").addClass("box-shadow");
			$(".latest-box-1").removeClass("box-shadow");
		});
	});
	$(".latest-box-2").mouseover(function()
	{ 
	   	$(".latest-box-1").removeClass("box-shadow");
		$(".latest-box-2").addClass("box-shadow");
		$(".latest-box-3").removeClass("box-shadow");
		
		$(".latest-box-2").mouseleave(function(){
			$(".latest-box-2").addClass("box-shadow");						
		});
	});
	$(".latest-box-3").mouseover(function()
	{ 
	   	$(".latest-box-1").removeClass("box-shadow");
		$(".latest-box-2").removeClass("box-shadow");
		$(".latest-box-3").addClass("box-shadow");
	});
	
	$(".latest-box-3").mouseleave(function(){
			$(".latest-box-2").addClass("box-shadow");
			$(".latest-box-3").removeClass("box-shadow");
		});
});

/*** SEARCH ***/

$( document ).ready(function(){
    
    $(".loop").click(function(){
        $("#myOverlay").show();
    });
    
    $(".closebtn").click(function(){
        $("#myOverlay").hide();
    });
    
});



