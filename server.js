const express = require("express");
const app = express();
const environment = process.env.NODE_ENV || "development";

var cors = require("cors");

app.set("port", process.env.PORT || 3000);

app.locals.potds = require("./mockPotds");
app.locals.title = "spaaaace piiiictuuuures";

app.use(express.static("dist"));

app.use(cors());
app.get("/api/v1/potd/:day", (request, response) => {
  const { day } = request.params;
  response.status(200).json(app.locals.potds[day]);
});

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}`);
});
