require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const route = require("./routes/route");
const connect = require("./db/connect");
const bodyParser = require("body-parser");
const cors = require('cors');


// Enable CORS for all routes
app.use(cors());


app.use(bodyParser.json());
app.use("/", route);

app.get("/", (req, res) => {
  res.send(`This all are the endpoint of this API "/tickets"   "/checking" 
   "/ticketbooking"
   "/changeticket/:id"
   "/deleteticket/:id"`);
});

const start = async () => {
  try {
    await connect(process.env.mongouri);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
