// module.exports = " THIs is the today.js file";

let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

exports.DayofWeek = function () {
  return days[date.getDay() - 1];
};
