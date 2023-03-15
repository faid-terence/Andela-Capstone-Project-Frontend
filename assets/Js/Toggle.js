$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.aside').toggleClass('toggle');
    });
    
    $(window).on ('scroll load' , function(){
        
        $('#menu').removeClass('fa-times');
        $('.aside').removeClass('toggle');
    
    });
    
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop :$($(this).attr('href')).offset().top,
    
        },
        500,
        'linear'
        );
    
    });
    
    
    
    });