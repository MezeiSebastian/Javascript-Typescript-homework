import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/sum/:var1/:var2", (request, response) => {
  let var1 = parseInt(request.params.var1);
  let var2 = parseInt(request.params.var2);
  let sum =var1 + var2;
  response.send(`${sum}`);
});

app.get("/substraction/:var1/:var2", (request, response) => {
  let var1 = parseInt(request.params.var1);
  let var2 = parseInt(request.params.var2);
  let substraction = var1 - var2;
  response.send(`${substraction}`);
});

app.get("/multiplication/:var1/:var2", (request, response) => {
  let var1 = parseInt(request.params.var1);
  let var2 = parseInt(request.params.var2);
  let multiplication = var1 * var2;
  response.send(`${multiplication}`);
});

app.get("/division/:var1/:var2", (request, response) => {
  let var1 = parseInt(request.params.var1);
  let var2 = parseInt(request.params.var2);
  let multiplication = var1 / var2;
  response.send(`${multiplication}`);
});

app.listen(port, () => {
  console.log(`Server started`);
});
