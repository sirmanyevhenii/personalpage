// burger menu
$('.toggle-btn').click(function() {
	$('.top-menu').toggleClass('top-menu--active');
	$('.toggle-btn').toggleClass('active');
});

$(document).click(function(event) {
	if ($(event.target).closest('.toggle-btn').length ) return;
	$('.toggle-btn').removeClass('active');
	$('.top-menu').removeClass('top-menu--active');
	event.stopPropagation();
});

// scroll
$(function() {
    $('.smooth').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 750);
        }
    });
});


$('button.submit').disabled = true;	// disable button on load

// Enable button 
function enable_submit() {
  $('button.submit').disabled = false;
  $('button.submit').addClass('not-disabled');
}

// Disable button
function disable_submit() {
  $('button.submit').disabled = true;
  $('button.submit').removeClass('not-disabled');
}

// Display feedback after rating 
$('.rating').on('click', function() {
  var rating = this['value'];
  
  $('.feedback').css('display', "block");
  
  feedback_validate(rating);
  
});

// Run enable button function based on input
$('.feedback textarea').keyup(function() {
  if ($('.feedback textarea').val().length > 3)   {
    enable_submit();
  }
});

// Enable or disable button by validation
function feedback_validate(val) {
  if (val <= 3) {
    disable_submit();
    
  } 
  else if (val > 3) {
    enable_submit();
  }
  
}