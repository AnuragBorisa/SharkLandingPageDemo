import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import scriptRoutes from "./routes/scriptRoutes.js";

const app = express();
const PORT = 8080 || 5000;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/saveSpreadsheet", scriptRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
