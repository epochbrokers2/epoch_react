/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/occupancy.js ***!
  \***********************************/
jQuery(document).ready(function ($) {
  $("#factory").val('');
  $("#factory").keyup(function () {
    var house_type = $("select#house_type").val();
    var value = $("input#serchFactory").val();
    $.ajax({
      type: "GET",
      url: baseURL + "/getOccupancy",
      // data: { 'keywords': value + "&house_type=" + house_type },
      data: "keywords=" + value + "&house_type=" + house_type,
      dataType: "json",
      success: function success(data) {
        $("#serchFactory").autocomplete({
          source: data
        });
      }
    });
  });
});
/******/ })()
;