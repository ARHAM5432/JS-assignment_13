var tareekh = new Date();
console.log(tareekh.getDay());
console.log(tareekh.getMonth());
console.log(tareekh.getDate());
console.log(tareekh.getFullYear());
console.log(tareekh.getHours());
console.log(tareekh.getMinutes());
console.log(tareekh.getSeconds());
console.log(tareekh.getMilliseconds());
console.log(tareekh.getTime());

// Question 1 🎶
console.log(new Date("Dec 5 2015"));

//  Question 2 🎶
 var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
 console.log(months[rightNow.getMonth()]);

// Question 3 🎶 
 var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
 console.log(days[rightNow.getDay()]);

// Question 4 🎶
var day = new Date().getDay()
// day == 6 || day == 0 ? alert("It's Fun day!") : false

// Question 5 🎶
var date_2 = new Date().getDate();
// date_2 < 15 ? alert("First 15 days of month") : alert("Last days of month")

// Question 6 🎶
var now = new Date().getHours();
// now < 12 ? alert("Its A.M") : alert("It's P.M")

// Question 7 🎶
var laterDate = new Date(2020, 11, 31);
console.log(laterDate);

// Question 8 🎶
var ramzanStart = new Date(2015, 5, 18);
var today = new Date();
var timeDiff = today - ramzanStart;
var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
alert(daysPassed + " days have passed since 1st Ramadan.");
