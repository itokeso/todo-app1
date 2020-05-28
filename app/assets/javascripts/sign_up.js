$(function(){
  $('.required').on('blur',function(){
    if($(this).val() == ""){
      $(this).siblings('span.error_required').text("※入力必須項目です");
      $(this).css({
        backgroundColor: 'pink'
      })
    } else {
      $(this).siblings('span.error_required').text("");
    }
  });
$("#name").on('blur', function(){
  if(!$(this).val().match(/^[ぁ-んァ-ンー-龥 ]+$/) && !$(this).val().length == 0){
    $(this).siblings('span.error_name').text("※正しく入力して下さい");
  } else {
    $(this).siblings('span.error_name').text("");
  }
  });
$("#mail").on('blur', function(){
  if(!$(this).val().match(/^[a-zA-Z0-9_\#!$%&`'*+\-{|}~^\/=?\.]+@[a-zA-Z0-9][a-zA-Z0-9\.-]+$/) && !$(this).val().length == 0) {
    $(this).siblings('span.error_mail').text("※正しく入力してください");
} else {
    $(this).siblings('span.error_email').text("");
  }
  });
$("#pass").on('blur', function(){
  if(!$(this).val().match(/^[a-z\d]{6,100}$/i) && !$(this).val().length == 0) {
    $(this).siblings('span.error_pass').text("※正しく入力して下さい");
  } else {
    $(this).siblings("span.error_pass").text("");
  }
  })
$("#pass2").on('blur', function(){
  if(!$(this).val().match(/^[a-z\d]{6,100}$/i) && !$(this).val().length == 0) {
  $(this).siblings('span.error_pass2').text("※正しく入力して下さい");
  } else {
    $(this).siblings("span.error_pass2").text("");
  }

  })
});