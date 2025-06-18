const express = require("express");
const app = express();
const cors = require("cors");
const infoRoutes = require("./routes/infoRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", infoRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
