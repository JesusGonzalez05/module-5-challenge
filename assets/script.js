// use moment().format() to get the date 
$("#currentDay").text(moment().format("MMM Do, YYYY"));

// allow time blocks to change color based on current time - HH allows for only hr 
var currentTime = moment().format('HH');

// create function for color change
$('.time').each(function(){
  var timeListed = $(this).parent().attr("id");
  // change the color if its the current time - red
  if (currentTime === timeListed) {
    $(this).addClass("present")
  }
  // color of all hours in the future green
  else if (currentTime < timeListed) {
    $(this).removeClass("present")
    $(this).addClass("future")
  }
  // color of all hours in the past green
  if (currentTime > timeListed) {
    $(this).removeClass("future")
    $(this).addClass("past")
  }
});

// save button adds time and text to local storage
var saveButton = $('.saveBtn');

// add the text area to local storage and its hour id
$('.saveBtn').on('click', function () {
    var task = $(this).siblings('.textArea').val();
    var time = $(this).parent().attr("id");
    console.log(time);

localStorage.setItem(time, task);
  });

  // set values from local storage 
$('#9 .textArea').val(localStorage.getItem('9'));
$('#10 .textArea').val(localStorage.getItem('10'));
$('#11 .textArea').val(localStorage.getItem('11'));
$('#12 .textArea').val(localStorage.getItem('12'));
$('#13 .textArea').val(localStorage.getItem('13'));
$('#14 .textArea').val(localStorage.getItem('14'));
$('#15 .textArea').val(localStorage.getItem('15'));
$('#16 .textArea').val(localStorage.getItem('16'));
$('#17 .textArea').val(localStorage.getItem('17'));