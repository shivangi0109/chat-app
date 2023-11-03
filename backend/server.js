require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT;

// Create Express App
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get("/", (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});