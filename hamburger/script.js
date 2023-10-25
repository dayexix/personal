$(document).ready(function(){
    $('.toggle-menu,#menu .main-nav a').click (function(){
        $('.toggle-menu').toggleClass('active');
        $('#menu').toggleClass('open');
    });
});