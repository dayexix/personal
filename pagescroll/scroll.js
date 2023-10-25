$(document).ready(function(){
    var c1p;
    var c2p;
    var c3p;
    //각 컨텐츠의 위치(위에서 떨어져있는)
    //$("요소").offset().top : #area1요소의 위치(위에서부터의)값
    c1p=$("#area1").offset().top; 
    c2p=$("#area2").offset().top;
    c3p=$("#area3").offset().top;

    // 메뉴클릭시 해당컨텐츠로 페이지스크롤
    $(".main-nav a").click(function(){
        $("html,body").animate({scrollTop:c1p},2000);
    });
    $(".main-nav a").click(function(){
        $("html,body").animate({scrollTop:c2p},2000);
    });
    $(".main-nav a").click(function(){
        $("html,body").animate({scrollTop:c3p},2000);
    });
    return false;

});
