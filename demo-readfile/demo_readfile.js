var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

fs.appendFile("mynewfile1.txt", " This is new text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});

// fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });

// fs.unlink('myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });
