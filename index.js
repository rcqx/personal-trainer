require('dotenv').config();

const express = require('express');
// const cors = require('express-cors');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

const PORT = 8080;
const routes = require('./routes/routes');

app.use(express.json());
app.use('/api', routes);
app.use(express.urlencoded({ extended: true }));
app.listen(PORT || 8081, () => {
  console.log(`Server Started at ${PORT}`);
});


