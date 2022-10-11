// use moment().format() to get the date 
$("#currentDay").text(moment().format("MMM Do, YYYY"));

// allow time blocks to change color based on current time

// save button adds time and text to local storage
var saveButton = $('.saveBtn');

$('.saveBtn').on('click', function () {
    var task = $(this).siblings('.textArea').val();
    var time = $(this).parent().attr("id");
    console.log(time);

localStorage.setItem(time, task);
  });