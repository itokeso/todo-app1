$(function(){
  $('.required').on('blur',function(){
    if($(this).val() == ""){
      $(this).siblings('span.error_required').text("※入力必須項目です");
      $(this).addClass("errored");
    } else {
      $(this).siblings('span.error_required').text("");
      $(this).removeClass("errored");
    }
  });
$("#name").on('blur', function(){
  if(!$(this).val().match(/\A[ぁ-んァ-ンー-龥 ]+\z/) && !$(this).val().length == 0){
    $(this).siblings('span.error_name').text("※正しく入力して下さい");
    $(this).addClass("errored");
  } else {
    $(this).siblings('span.error_name').text("");
    $(this.removeClass("errored"));
  }
});
$("#mail").on('blur', function(){
  if(!$(this).val().match(/\A[a-zA-Z0-9_\#!$%&`'*+\-{|}~^\/=?\.]+@[a-zA-Z0-9][a-zA-Z0-9\.-]+\z/) && !$(this).val().length == 0) {
    $(this).siblings('span.error_mail').text("※正しく入力してください");
    $(this).addClass("errored");
} else {
    $(this).siblings('span.error_email').text("");
    $(this).removeClass("errored");
  }
});
$("#pass").on('blur', function(){
  if(!$(this).val().match(/\A[a-z\d]{6,100}\z/i) && !$(this).val().length == 0) {
    $(this).siblings('span.error_pass').text("※正しく入力して下さい");
    $(this).removeClass("errored");
  } else {
    $(this).siblings("span.error_pass").text("");
    $(this).removeClass("errored");
  }
})
$("#pass2").on('blur', function(){
  if(!$(this).val().match(/\A[a-z\d]{6,100}\z/i) && !$(this).val().length == 0) {
  $(this).siblings('span.error_pass2').text("※正しく入力して下さい");
  $(this).removeClass("errored");
  } else {
    $(this).siblings('span.error_pass2').text("");
    $(this).removeClass("errored");
  }
})
$("#submit").on('click', function(){
  $("required").each(function(){
    if($(this).val() == ""){
      $(this).siblings('span.error_required').text("※入力必須項目です");
      $(this).addClass("errord");
    }
  })
})
});
