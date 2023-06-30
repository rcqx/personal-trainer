import express from 'express';
import config from './src/config/config.js';
import cors from 'cors';
import router from './src/routes/routes.js';
import mongoose from 'mongoose';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

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

// Swagger configuration options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Personal Trainer API',
      version: '1.0.0',
      description: 'API documentation for Personal Trainer application',
    },
  },
  // API files path
  apis: ['./src/routes/*.js'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use('/api', router);
app.use(express.urlencoded({ extended: true }));
app.listen(config.port, () => {
  console.log(`Server Started at ${config.port}`);
});

