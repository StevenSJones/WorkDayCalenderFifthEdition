// 1 - instantiate/invoke a moment object
let nowMoment = moment();
  
// instantiate a JavaScript Date object
var NowDate = new Date();



//this will grab moment obj
$("#currentDay").text(nowMoment.format('dddd, MMMM Do YYYY, h:mm:ss a'));







// var NowMoment = moment();
// var eDisplayMoment = document.getElementById('displayMoment');
// eDisplayMoment.innerHTML = NowMoment.format('YYYY-M-D');