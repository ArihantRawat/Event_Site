$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    
    if($(this).scrollTop() > 100) { 
        $('#navvy').addClass('bg-dark');
        $('#navvy').removeClass('transparent');
    } else {
        $('#navvy').removeClass('bg-dark');
        $('#navvy').addClass('transparent');
      
    }
  });

  
});

