$("#firstnews-more").click(function () {
  $("#firstnews2").toggle("show");
});

$("#firstnews-more").click(function () {
  $("#firstnews-more").toggle("hide");
});

$("#firstnews-more").click(function () {
  $("#after").toggle("hide");
});

$("#firstnews-more").click(function () {
  $("#open").toggle("hide");
});

$("#firstnews-more").click(function () {
  $("#back").toggle("show");
});

$("#back").click(function () {
  $("#open").toggle("show");
});

$("#back").click(function () {
  $("#firstnews2").toggle("hide");
});

$("#back").click(function () {
  $("#after").toggle("show");
});

$("#back").click(function () {
  $("#firstnews-more").toggle("show");
});

$("#back").click(function () {
  $("#back").toggle("hide");
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

$(document).mouseup(function (e) {
  var container = $("#user-box");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
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
