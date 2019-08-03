$(document).ready(function(){
    $(window).scroll(function(){
        var scrollLength = $(window).scrollTop();
        if(scrollLength>600){
            $('.navbar').css({'background':'rgba(0,0,0,1)',
                                'opacity':'1'})
        }
        else{
            $('.navbar').css({'background':'#000;',
                                'opacity':'0.8'})
        }
    })
})