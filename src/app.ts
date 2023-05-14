import express, { Application } from "express";
import cors from "cors";
import userRoutes from './app/modules/user/user.route';
const app: Application = express();

//use cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("", userRoutes);
app.use('/api/v1/user',userRoutes)

export default app;
