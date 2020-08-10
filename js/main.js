$(document).ready(function () {
  $('#btn-reg').click(function () {
    $('.popap-reg').removeClass('d-none');
    $('.popap').addClass('d-none');
  });
  $('.custom-select').click(function () {
    $(this).toggleClass("open");
  });
  $('.option').click(function () {
    $('.custom-select').removeClass('.open')
  })
});