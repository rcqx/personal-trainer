require('dotenv').config();

const express = require('express');
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

const app = express();
const PORT = 8080;
const routes = require('./routes/routes');

app.use(express.json());
app.use('/api', routes);
app.listen(PORT || 8081, () => {
  console.log(`Server Started at ${PORT}`);
});


