import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 8080,
  database: {
    host: process.env.DB_HOST || 'localhost',
    databaseUrl: process.env.DATABASE_URL,
  },
  llm: {
    model: process.env.OPEN_AI_MODEL,
    apikey: process.env.OPEN_AI_KEY,
  },
  env: process.env.NODE_ENV
};

export default config;
