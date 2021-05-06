/*ハンバーガー*/
$(function() {
    $('.btn-gNav').on("click", function(){
  
      $(this).toggleClass('open');
      $('#gNav').toggleClass('open');
    });
  
  });
  
  // メニューをクリックされたら、非表示にする
  $(function() {
    $('.gNav-menu').on("click", function(){
       $('#gNav').removeClass('open');
       $('.btn-gNav').toggleClass('open');
    });
  });
