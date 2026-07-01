const express = require("express");
const fs = require("fs");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.post("/simulate", (req, res) => {

  const { code } = req.body;

  fs.writeFileSync("temp/design.v", code);

  const command = `
    iverilog -o temp/out temp/design.v temp/testbench.v &&
    vvp temp/out
  `;

  exec(command, (err, stdout, stderr) => {

    if (err) {
      return res.json({ success: false, error: stderr });
    }

    res.json({
      success: true,
      output: stdout
    });
  });

});

app.listen(3000, () => {
  console.log("CORETEXELA Verilog Engine running");
});
