$(document).ready(function() {
  $('.dropdown').click(function () {
    $('.dropdown-menu').hide();
    
    $(this).children('.dropdown-menu').toggle();
  });
  
  
});