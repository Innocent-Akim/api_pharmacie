import dotenv from "dotenv";
dotenv.config();
export default {
  USER: process.env.DEV_DB_USERNAME,
  PASSWORD: process.env.DEV_DB_PASSWORD,
  DB: process.env.DEV_DB_NAME,
  DEV: {
    HOST: process.env.DEV_DB_HOSTNAME,
    dialect: process.env.DEV_DB_DIALECT,
    port: process.env.DEV_DB_PORT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  
};
