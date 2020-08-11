$(document).ready(function () {
  $('#btn-reg').click(function () {
    $('.popap-reg').addClass('d-block');
    $('.popap').removeClass('show');
  });
  $('.custom-select').click(function () {
    $(this).toggleClass("open");
  });
  $('.option').click(function () {
    $('.custom-select').removeClass('.open')
  })
});