var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$("#open").click(function () {
  $("#menu").toggle("show");
});

$("#close").click(function () {
  $("#menu").toggle("hide");
});

$("#user").click(function () {
  $("#user-box").toggle("show");
});


$(document).mouseup(function(e){
  var container = $("#user-box");
  if(!container.is(e.target) && container.has(e.target).length === 0){
      container.hide();
  }
});

$("#marked").click(function () {
  $("#marked-extent").toggle("show");
});

$("#close2").click(function () {
  $("#marked-extent").toggle("hide");
});

$("#categories").click(function () {
  $("#categories-box").toggle("show");
});

$("#close3").click(function () {
  $("#categories-box").toggle("hide");
});

$("#close4").click(function () {
  $("#relatednews-box").toggle("hide");
  $("#relatednews-box-after").toggle("hide");
});

