http = require("http");
let today = require("./today.js");
// console.log(today); // Log the message from today.js
console.log(today.DayofWeek()); // Log the message from today.js
let server = http.createServer(function (req, res) {
  let body = "Helo World! welcome to server programming";
  let responseText = today.DayofWeek() + "\n" + body;
  res.writeHead(200, {
    "Content-length": responseText.length,
    "Content-Type": "text/plain",
  });
  res.end(responseText);
});
server.listen(3000);

//CONTENT LENGTH ISSUE IS FIXED HERE..
// res.writeHead(200, {
//     "Content-length": body.length, //responseText.length
//     //The output is trimmed when you use res.end(body) because the Content-length header is set to body.
//     // length, which only accounts for the length of the body string.

//res.end(today + "\n" + body); or res.end(responseText);let responseText = today + "\n" + body;
//today is outside the create server and still can be used inside the create server function.
