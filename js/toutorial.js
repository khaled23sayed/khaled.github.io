/*global $, window*/

$(function () {
  
    "use strict";
    
    
        
    //trigger nnice scroll
    
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: 15,
        cursorborder: '1px solid ##f7600e'
    });
    
    $('.header').height($(window).height());
    
    //adjust header height
    
    $(window).resize(function () {
        
       $('.header').height($(window).height());
        
    }); 
    
    $('.hire').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.features').offset().top
        }, 1000);
        
    });
    
    //
    
    $('.show').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.our-works').offset().top
        }, 1000);
        
    });
    
    // show hidden items
    
    $('.show-more').click(function () {
        
        $('.hidden').fadeIn(1000);
        
    });
    
    // check testimonials
    
    function checkClient () {
        
        var leftArrow = $('#left');
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();  
            
        } else {
            
            leftArrow.fadeIn();
            
        }
        
        var rightArrow = $('#right');
        
        if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();  
            
        } else {
            
            rightArrow.fadeIn();
            
        }
        
    }

    checkClient();
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClient();
                
            });
        } else {
            
            if ($(this).hasClass('fa-chevron-left')) {
                
                $('.testim .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClient();
                
            });
                
            }
        }
    });
  
    //
    
});





















