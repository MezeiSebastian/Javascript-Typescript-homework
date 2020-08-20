import fetch, { Body } from "node-fetch";


const sumURL = "http://localhost:8080/sum/1/1";
const substractionURL = "http://localhost:8080/substraction/2/2";
const multiplicationURL = "http://localhost:8080/multiplication/3/5";
const divisionURL = "http://localhost:8080/division/9/3";

fetch(sumURL)
  .then((obj) => obj.json())
  .then((jsonObj) => console.log("Sum: " + jsonObj));

fetch(substractionURL)
  .then((obj) => obj.json())
  .then((jsonObj) => console.log("Substraction: " + jsonObj));

fetch(multiplicationURL)
  .then((obj) => obj.json())
  .then((jsonObj) => console.log("Multiplication: " + jsonObj));

fetch(divisionURL)
  .then((obj) => obj.json())
  .then((jsonObj) => console.log("Division: " + jsonObj));

