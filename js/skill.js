$().ready(function(){
var skills = {
    ht: 95,
    cs:95,
    jq: 70,
    java: 70,
    wpj: 80,
    wpp: 80,
    web:85,
    vue:70,
    sk: 90,
    ph: 75,
    il: 70,
    vsc:90,
    kakao:85,
    in: 85,
    fl: 75,
    mic:80
  };
  
  $.each(skills, function(key, value) {
    var skillbar = $("." + key);
  
    skillbar.animate(
      {
        width: value + "%"
      },
      3000,
      function() {
        $(".speech-bubble").fadeIn();
      }
    );
  });
});