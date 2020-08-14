// 1 created a var and set it equal to the new Date () method that we get back from moment.js
let responseNowDate = new Date();
// console.log(new Date().getHours());

//If the newDate response from the get hours method is less than 12 then say good morning
if (new Date().getHours() < 12) {
  $("#demo").text("Good Morning!");//Does the same as the line beneath that is commented out 
  //   document.getElementById("demo").innerHTML = "Good Afternoon!";
} else {//else, the newDate response from the get hours method is more than 12 and you see good evenin.
  $("demo").text("Good Evening!"); //Does the same as the line beneath thatis commented out
  //   document.getElementById("demo").innerHTML = "Good Afternoon!";
}

//2 this will grab moment obj
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
//4
$(".saveBtn").on("click", function (e) {
  e.preventDefault();
  const txt = $(this).parent().siblings(".description").children().val();
  console.log(txt);
});
