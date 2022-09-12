import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import db from "../instance/Instance.js";
import router from "../route/appRoute.js"
import path from 'path';


dotenv.config();
// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined"));
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
const port = process.env.PORT || 3000;

// app.use('/src', express.static('src'));
app.use('/api/v1', router)


router.get("/", (req, res, next) => {
  return res.status(200).json(`${req.protocol}://${req.get('host')}/images/`);
});
app.listen(port, () => console.log(`listening on ${port}`));
