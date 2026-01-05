const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let bus = { lat: 0, lng: 0 };

app.post("/update", (req, res) => {
  bus.lat = req.body.lat;
  bus.lng = req.body.lng;
  res.json({ success: true });
});

app.get("/location", (req, res) => {
  res.json(bus);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
