$(function(){
    //메인 li에 마우스 호버하면 자식 sub만 보이게 하기
    
    $('.main>li').hover(function(){
        $(this).find('.sub').stop().slideDown();
        $(this).find('.sub2').stop().slideDown();
        
        if($(this).find('.sub').length !=0){
            $('.bg').stop().slideDown();
        };
        
    },function(){
        $('.sub').hide();
        $('.bg').stop().slideUp();
    });
    
    
    $('.box li').click(function(){
        //$('.box li a').removeClass('on');
        $(this).siblings().find('a').removeClass('on');
        $(this).children('a').addClass('on');
        
        var i=$(this).index();
        $('.tabcon>div').hide();
        $('.tabcon>div').eq(i).show();
    });
    
    
    $('.btn').click(function(){
        $('#popUp').fadeOut();
    });
    
    $('.open').click(function(){
        $('#popUp').fadeIn();
    });
    
    
    /*$('.box li').eq(0).click(function(){
        $('.tabcon>div').hide();
        $('.tab1').show();
    });
    
    $('.box li').eq(1).click(function(){
        $('.tabcon>div').hide();
        $('.tab2').show();
    });
    
    $('.box li').eq(2).click(function(){
        $('.tabcon>div').hide();
        $('.tab3').show();
    });*/
});