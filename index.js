import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/routes.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
app.use(cors());
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

app.use(express.json());
app.use('/api', router);
app.use(express.urlencoded({ extended: true }));
app.listen(PORT || 8081, () => {
  console.log(`Server Started at ${PORT}`);
});

