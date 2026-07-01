const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const simulateRoute = require("./routes/simulate");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", simulateRoute);

app.listen(3000, () => {
  console.log("CORETEXELA Verilog Backend Running on port 3000");
});
