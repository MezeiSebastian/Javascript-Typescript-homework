"use strict";
var fs = require("fs");
var start = Date.now();
//Method 1 
//Time 15961 - 27890
/*
function convertBase(value: string, from_base: number, to_base: number) {
  //Sets the caracters needed for the base of the numbers
  var range = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/".split(
    ""
  );
  var from_range = range.slice(0, from_base);
  var to_range = range.slice(0, to_base);

  //Converts the numbers to base 10, 15 = 10^1*1+10^0*5
  var dec_value = value
    .split("")
    .reverse()
    .reduce(function (carry: number, digit: string, index: number) {
      if (from_range.indexOf(digit) === -1)
        throw new Error(
          "Invalid digit `" + digit + "` for base " + from_base + "."
        );//The file contains numbers in scientific format and the program doesn't work there
      return (carry += from_range.indexOf(digit) * Math.pow(from_base, index));
    }, 0);

  //Converts the number from base 10 to to_base using division
  var new_value = "";
  while (dec_value > 0) {
    new_value = to_range[dec_value % to_base] + new_value;
    dec_value = (dec_value - (dec_value % to_base)) / to_base;
  }
  return new_value || "0";
}

//Read from file and calling the convertBase function
fs.readFile("data.csv", "utf8", function (err: any, data: any) {
  let a = data.split("\n");
  const printToFile = 100000;
  
  for (let i = 0; i < a.length; i++) {
    let b = a[i].split(",");
    try {
      let c = convertBase(b[0], Number(b[1]), Number(b[2])) + "\n";
      if (i % printToFile === 0) {
        fs.appendFile("my_file.txt", c, function (err: any) {
          if (err) throw err;
        });
      }
    } catch (err) {}
  }

  console.log(Date.now() - start);
});


//Method 2
//Time 1972-2714
*/
fs.readFile("data.csv", "utf8", function (err, data) {
    var a = data.split("\n");
    var c = [];
    for (var i = 0; i < a.length; i++) {
        var b = a[i].split(",");
        try {
            c.push(parseInt(b[0], Number(b[1])).toString(Number(b[2])));
        }
        catch (_a) { }
        ;
    }
    var file = fs.createWriteStream("my-file.txt");
    file.on('error', function (err) { });
    c.forEach(function (v) { file.write(v + '\n'); });
    file.end();
    console.log(Date.now() - start);
});
//# sourceMappingURL=index.js.map