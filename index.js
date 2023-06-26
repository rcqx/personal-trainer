import express from 'express';
import config from './src/config/config.js';
import cors from 'cors';
import router from './src/routes/routes.js';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
const mongoString = config.database.databaseUrl;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
  console.log(error);
})
database.once('connected', () => {
  console.log('Database Connected');
})

app.use(express.json());
app.use('/api', router);
app.use(express.urlencoded({ extended: true }));
app.listen(config.port, () => {
  console.log(`Server Started at ${config.port}`);
});

