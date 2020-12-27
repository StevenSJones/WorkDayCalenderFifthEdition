$(document).ready(function () {
  //.ready event on the JQUERY from running before the document is done loading.

  // 1 created a var and set it equal to the new Date () method that we get back from moment.js
  let responseNowDate = new Date();
  let now = moment();

  // array of objects
  let schedule = [
    { time: "hour-9", note: "" },
    { time: "hour-10", note: "" },
    { time: "hour-11", note: "" },
    { time: "hour-12", note: "" },
    { time: "hour-13", note: "" },
    { time: "hour-14", note: "" },
    { time: "hour-15", note: "" },
    { time: "hour-16", note: "" },
  ];

  var hour; //at each index the hour var becomes the object that we are dealing with.
  for (let i = 0; i < schedule.length; i++) {
    hour = schedule[i]; //hour equal to the object returned by index i
    $("#" + hour.time).val(hour.note);
  }

  $("#saveBtn").on("click", function (event) {
    var hourId = event.target.dataset.id;
    var note = $("#" + hourId).val();
    var hour;

    for (let i = 0; i < schedule.length; i++) {
      hour = schedule[i];
      if (hour.time == hourId) {
        schedule[i].note = note;
        break;
      }
    }
  });

  //If the newDate response from the get hours method is less than 12 then say good morning
  if (new Date().getHours() < 12) {
    $("#demo").text("Good Morning!");
    $(".card").css("background-color", "yellow").css("color", "black");
  } else {
    //else, the newDate response from the get hours method is more than 12 and you see good evening.
    $("#demo").text("Good Evening!"); //Does the same as the line
    $(".card").css("background-color", "midnightblue").css("color", "white"); //method calls on the same element chained together
  }

  //2 this will grab moment obj
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  //4
  $(".saveBtn").on("click", function (e) {
    //prevent default
    e.preventDefault();
    $(this).hide(".saveBtn");
    //find the description in the this object that we get in response
    const txt = $(this).parent().siblings(".description").children().val();
    console.log(txt);
  });
});
