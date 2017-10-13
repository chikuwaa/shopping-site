$(document).ready(function(){
    $("#sp_navi_btn").click(function(){
        $(".sp_navi_li").slideToggle();
    });
    //menu
    
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
    //carousel
    
    $(window).load(function(){
        $("#list_img img").click(function(){
            var img_src = $(this).attr("src");
            var img_alt = $(this).attr("alt");
            
            if(img_alt.length > 0){
                $("#display_img img").attr("src", img_src);
            }
        });
        
    });
});