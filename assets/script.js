// use moment().format() to get the date 
$("#currentDay").text(moment().format("MMM Do, YYYY"));

// allow time blocks to change color based on current time
var currentTime = moment().format('HH');
$('.time').each(function(){
    var timeListed = $('.time').parent().attr("id");
    if (currentTime === timeListed) {
      $(this).addClass("present")
    }

});
var hours = $('.time').parent().attr("id");
console.log(hours)
if (hours )
// save button adds time and text to local storage
var saveButton = $('.saveBtn');

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